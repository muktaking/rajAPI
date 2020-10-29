const express = require("express");
const fs = require("fs");
const router = express.Router();

module.exports = router.post("/", (req, res) => {
  const { field, rightInfo, email, uid } = req.body.data;
  if (email.length > 0 && rightInfo.length > 0) {
    var logStream = fs.createWriteStream("flag.csv", { flags: "a" });
    // use {flags: 'a'} to append and {flags: 'w'} to erase and write a new file
    logStream.write(
      `${uid.toString().replace(/\,/g, "*#*")},${field
        .toString()
        .replace(/\,/g, "*#*")},${rightInfo.replace(
        /\,/g,
        "*#*"
      )},${email.replace(/\,/g, "*#*")}`
    );
    logStream.end("\n");
    return res.json({ ok: "Ok" });
  }
  return res.sendStatus(404);
});
