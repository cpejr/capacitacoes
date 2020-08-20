const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

module.exports = {

    async create(request, response) {
        try {
            const { email, password } = request.body;

            const result = await User.signIn(email, password);

            if (result.user) {
                const user = result.user;
                const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30d" });
                return response.status(201).json({ accessToken, user, message: "Sessao criada com sucesso!" })
            } else {
                return response.status(400).json({ message: result.error });
            }

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to Log In" });
        }
    },

    async validate(request, response) {
        try {
            const authHeader = request.headers.authorization;
            const [scheme, token] = authHeader
                ? authHeader.split(" ")
                : [undefined, undefined];

            if (!token || token === null)
                return response.status(401).json({ error: "No token provided" });

            if (!/^Bearer$/i.test(scheme))
                return response.status(401).json({ error: "Token badformatted" });

            const verify = await new Promise((res) => {
                jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                    if (err) return res({ verified: false, user: {} });

                    return res({ verified: true, user: user });
                });
            });

            if (verify !== undefined) return response.status(200).json({ valid, user } = verify);
            return response.status(403).json({ error: "Invalid authorization token" });

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to Authenticate Token" });
        }
    },

}
