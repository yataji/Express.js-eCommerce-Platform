require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORTSERVER || 7500,
  },
  jwtConfig: {
    secretKey: process.env.SECRETKEYJWT,
    expiresIn: process.env.EXPIRESINJWT,
  },
  cookies: {
    httpOnly: process.env.HTTPONLYCOOKIE,
    maxAge: process.env.MAXAGECOOKIE,
  },
  cfMongoose: {
    mongoose_link_db: process.env.MONGOOSE_LINK_DB,
  },
};
