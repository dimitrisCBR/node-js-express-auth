require('dotenv').config();

module.exports = {
  secret: process.env.AUTH_SECRET || "default-secret-key",
  hasing_algorithm: process.env.HASHING_ALG || "HS256",
  jwt_expires_in: process.env.JWT_EXPIRES_IN_SECONDS || 86400 //default to 24 hours
};