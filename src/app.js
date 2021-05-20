const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for express config
const port = 3000;
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialDir = path.join(__dirname, "../templates/partials");

//Setup handlebar engines and views location
app.set("view engine", "hbs");
app.set("views", viewsDir);
hbs.registerPartials(partialDir);

//Setup static directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home Page",
    name: "Urgen Sherpa",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Urgen Sherpa",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Urgen Sherpa",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 Page",
    name: "Urgen Sherpa",
    errorMessage: "help Page Not found",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "You must provide address search term" });
  }

  const data = { forecast: "It is showing", address: req.query.address };
  res.send(data);
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({ error: "You must provide a search term" });
  }

  res.send({ products: [] });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Page",
    name: "Urgen Sherpa",
    errorMessage: "Page Not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
