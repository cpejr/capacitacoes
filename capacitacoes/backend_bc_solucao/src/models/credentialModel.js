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

class credentialActions {
    static async updateCredentials(credentials) {
        await Credential.create(credentials)
    };

    static async getCredentials() {
        const result = await Credential.find({});
        return result;
    };
}

async function createCredentials(credentials){

}

module.exports = credentialActions;