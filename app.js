const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const contact = require("./contact");
const flag = require("./flag");
const port = process.env.PORT | 3000;
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use("/contact", contact);
app.use("/flag", flag);
app.use("/", (req, res) => {
  res.send("OK");
});

app.listen(port, () => console.log(`server started on port ${port}`));
