import bodyParser from "body-parser";
import express from "express";
const app = express();

// port
const PORT = 3000;

app.use((req, res, next) => {
  console.log("requested route =>", req.url);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.route("/").get((req, res) => {
  res.sendFile(process.cwd() + "/pages/index.html");
});

app.route("/about").get((req, res) => {
  res.sendFile(process.cwd() + "/pages/about.html");
});

app
  .route("/contact")
  .get((req, res) => {
    res.sendFile(process.cwd() + "/pages/contact.html");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("Submitted");
  });

// route : "/compose"
// .get : show a form having two fields = title and contact
// .post : on submission of the form , make sure to log data in the terminal console

// // routes
// // home/root
// app.get("/", (req, res) => {
//   //   res.write("<h1>hello world</h1>");
//   //   res.write("<p>this is my homepage</p>");
//   //   res.send();

//   res.sendFile(process.cwd() + "/pages/index.html");
// });

// // about
// app.get("/about", (req, res) => {
//   //   res.write("<h1>about page</h1>");
//   //   res.write("<p>this is my ABOUT PAGE</p>");
//   //   res.send();
//   res.sendFile(process.cwd() + "/pages/about.html");
// });

// create my server
app.listen(PORT, () => {
  console.log("server started on port", 3000);
});
