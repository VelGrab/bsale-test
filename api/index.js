require("dotenv").config();
const server = require("./app.js");
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("%s listening at 3001"); // eslint-disable-line no-console
});
