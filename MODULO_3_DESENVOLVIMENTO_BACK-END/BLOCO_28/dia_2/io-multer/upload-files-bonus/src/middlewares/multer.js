const fs = require('fs/promises');
const path = require('path');
const multer = require('multer');

const uploadsDir = path.resolve(__dirname, '..', 'uploads');

async function fileAlreadyExists(filename) {
  const fileNames = await fs.readdir(uploadsDir);
  const alreadyExists = fileNames.some((name) => filename === name);

  return alreadyExists;
}

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: async (req, file, callback) => {
    const { fileName } = req.body;

    if (!fileName) {
      callback(new Error('422'));
      return;
    }

    const alreadyExists = await fileAlreadyExists(fileName);

    if (alreadyExists) {
      callback(new Error('409'));
      return;
    }

    callback(null, fileName);
  },
});

const upload = multer({ storage });

module.exports = upload;
