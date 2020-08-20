const multer = require('multer');
var storage = multer.memoryStorage()

const multerImageUploader = multer({
    storage: storage,
    fileFilter: (_req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
            cb(null, true);
        else cb({ error: 'File type not allowed' }, false);
    }
});

const imageUpload = (imageName, mode = "create") => {
    return (req, res, next) => {
        multerImageUploader.single(imageName)(req, res, function (err) {
            if (err) {
                //TODO melhorar essa mensagem de erro!
                return res.status(500).json(err);
            }
            if (!req.file && mode === "create")
                return res.status(400).json({ error: `${imageName} is required` });

            return next();
        });
    };
};

module.exports = imageUpload;