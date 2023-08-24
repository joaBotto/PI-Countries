// const axios = require("axios");
const server = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = 3001;
const infoApi = require("./loaders/infoApi");

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      await infoApi();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
