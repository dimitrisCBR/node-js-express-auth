require('dotenv').config();
const path = require('path');
const fs = require('fs');

const sslCertPath = path.resolve(__dirname, '../..', process.env.DB_CERT_FILENAME);
const sslCert = fs.readFileSync(sslCertPath).toString();

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: true,
//         ca: sslCert,
//     }
// });

module.exports = {
  url: process.env.DATABASE_URL,
  dialect: "postgres",
  dialectOptions: {
    // force SSL and pass read certificate file 
    ssl: {
      require: true, 
      rejectUnauthorized: false,
      ca: sslCert
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};