const contentful = require("contentful");

const config = {
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
};

module.exports = {
  createClient() {
    return contentful.createClient(config);
  },
};
