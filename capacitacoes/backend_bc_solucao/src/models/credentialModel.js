const mongoose = require('mongoose');

const credentialsSchema = new mongoose.Schema({
    access_token: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        required: true
    },
    scope: {
        type: String,
        required: true
    },
    token_type: {
        type: String,
        required: true
    },
    expiry_date: {
        type: Number,
        required: true
    }
});

const Credential = mongoose.model('Credential', credentialsSchema);

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