const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/images');
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null,  file.fieldname + '-' + imageName)
    }
})

const upload = multer({ storage: storage });

module.exports = upload;