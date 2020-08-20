const { google } = require("googleapis");
const stream = require("stream");
const path = require("path");
const Credential = require("./credentialModel");

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/drive"];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
let oAuth2Client;

const CREDENTIALS = {
  client_id: process.env.OAUTH2_CLIENT_ID,
  project_id: process.env.OAUTH2_PROJECT_ID,
  auth_uri: process.env.OAUTH2_AUTH_URI,
  token_uri: process.env.OAUTH2_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.OAUTH2_AUTH_PROVIDER,
  client_secret: process.env.OAUTH2_CLIENT_SECRET,
  redirect_uris: process.env.OAUTH2_REDIRECT_URIS.split(","),
  javascript_origins: process.env.OAUTH2_JAVASCRIPT_ORIGINS.split(","),
};

module.exports.config = async function config() {
  // Load client secrets from a local file.
  const { client_secret, client_id, redirect_uris } = CREDENTIALS;

  oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  oAuth2Client.on("tokens", (newToken) => {
    Credential.updateCredentials(newToken);
  });

  // Check if we have previously stored a token.
  const tokenData = await Credential.getCredentials();
  if (tokenData && tokenData.refresh_token) {
    oAuth2Client.setCredentials(tokenData);
    listFiles();
  } else {
    console.log(`
    Credential não encontrado, ou não está na base. Siga as instruções:
      1) Acesse a conta gmail do casulus
      2) Acesse o link: 'https://myaccount.google.com/u/2/permissions'
      3) Em 'Apps de terceiros com acesso à conta' remova o acesso desse projeto.
      4) Autorize o applicativo novamente no link: 
      ${getAccessToken()}
    `);
  }

  console.log(tokenData);
};

module.exports.validateCredentials = validateCredentials;

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 */
function getAccessToken() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  return authUrl;
}

function validateCredentials(code, scope) {
  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, newToken) => {
      if (err) {
        console.error(`Error retrieving access token`, err);

        return reject(err);
      }
      token = newToken;
      oAuth2Client.setCredentials(newToken);
      return resolve();
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 */
function listFiles() {
  const drive = google.drive({ version: "v3", auth: oAuth2Client });
  drive.files.list(
    {
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const files = res.data.files;
      if (files.length) {
        console.log("Files:");
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log("No files found.");
      }
    }
  );
}

exports.uploadFile = function uploadFile(buffer, name, mimeType) {
  return new Promise(async (resolve, reject) => {
    let bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);

    const drive = google.drive({ version: "v3", auth: oAuth2Client });
    var fileMetadata = {
      name: `${Date.now()}${path.extname(name)}`,
      parents: ["1iWvHoKvj2gegxs-aDD2aDQ5JE7gp7KT0"],
    };

    var media = {
      mimeType,
      body: bufferStream,
    };

    drive.files.create(
      {
        resource: fileMetadata,
        media: media,
        fields: "id",
      },
      function (err, res) {
        if (err) {
          // Handle error
          console.log(err);
          reject(err);
        } else {
          resolve(res.data.id);
        }
      }
    );
  });
};

exports.deleteFile = function deleteFile(fileId) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: "v3", auth: oAuth2Client });
    drive.files.delete({ fileId: fileId }, function (err, res) {
      if (err) {
        // Handle error
        console.log(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
