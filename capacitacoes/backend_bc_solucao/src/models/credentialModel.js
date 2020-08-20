const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
    accessToken: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    scope: {
        type: String,
        required: true
    },
    tokenType: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Number,
        required: true
    }
});

const Credential = mongoose.model('Credential', credentialsSchema);

async function createCredentials(credential) {
    await Credential.create(credential);
}

class credentialActions {
    static async createCredentials(credential) {
        await Credential.create(credential);
    };

    static async updateCredentials(credentials) {
        const credential = Credential.findOne({});
        const result = {};
        if (!credential) {
            result = await Credential.createCredentials(credentials);
            return result;
        }

        result = await Credential.findOneAndUpdate({}, credentials);
        return credentials;
    };

    static async getCredentials() {
        const result = await Credential.findOne({});
        return result;
    };
}


module.exports = credentialActions;