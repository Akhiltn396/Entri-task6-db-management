const dotenv = require("dotenv").config();


let config = {
    dbUrl:

    process.env.MONGODB_CLOUD_URL
  };

  module.exports = config;