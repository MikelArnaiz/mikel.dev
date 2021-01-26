const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const path = require('path');
const fileName = 'index.html';

const buildCvDirectory = path.resolve(__dirname, '../build/cv');

fs.readFile(path.resolve(__dirname, fileName), 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/%GDOCS_CV_URL%/g, process.env.GDOCS_CV_URL);

  if (!fs.existsSync(buildCvDirectory)) {
    fs.mkdirSync(buildCvDirectory, { recursive: true });
  }

  fs.writeFile(
    `${buildCvDirectory}/${fileName}`,
    result,
    'utf8',
    function (err) {
      if (err) return console.log(err);
    }
  );
});
