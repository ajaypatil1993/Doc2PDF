const express = require("express");
const multer = require("multer");
const docxToPDF = require("docx-pdf");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

// setting up the file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/convertFile", upload.single("file"), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    // Define output file path
    let outputPath = path.join(
      __dirname,
      "uploads",
      `${req.file.originalname}.pdf`
    );

    docxToPDF(req.file.path, outputPath, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Error converting docx to pdf",
        });
      }
      res.download(outputPath, () => {
        console.log("file downloaded");
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Vercel automatically assigns a port, so no need to define it.
module.exports = app;
