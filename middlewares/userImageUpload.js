const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/images/userImages');
        callback(null, folder)
    },
    filename: (req, file, callback) => {
        const imageName = Date.now() + path.extname(file.originalname);
        callback(null,  file.fieldname + '-' + imageName)
    }
})

const userImageUpload = multer({ storage: storage });

module.exports = userImageUpload;