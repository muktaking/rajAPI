const express = require("express");
const fs = require("fs");
const router = express.Router();

module.exports = router.post("/", (req, res) => {
  const { name, email, phone, message } = req.body.data;
  if (name.length > 0 && email.length > 0 && message.length > 0) {
    var logStream = fs.createWriteStream("data.csv", { flags: "a" });
    // use {flags: 'a'} to append and {flags: 'w'} to erase and write a new file
    logStream.write(
      `${name.replace(/\,/g, "*#*")},${email.replace(
        /\,/g,
        "*#*"
      )},${phone.replace(/\,/g, "*#*")},${message.replace(/\,/g, "*#*")}`
    );
    logStream.end("\n");
    return res.json(req.body.data);
  }
  return res.status(404);
});
