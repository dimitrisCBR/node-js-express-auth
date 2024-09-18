# Node.js Express Login and Registration example with JWT

**Refer to the original repo [bezkoder/node-js-express-login-example](https://github.com/bezkoder/node-js-express-login-example) for a README overview of the project.**

Forked to:
- use with PostgreSQL and pg/sequelize
- read secrets via dotenv
- add rate-limiter to /signin
- expose jwt token in /signin response (not only cookies)
- slightly increase security against XSS, CSRF 

## Project setup
```
npm install
```
create `.env` with the following variables:  
```
# Database config
DB_CERT_FILENAME="my-certificate-file.crt"
DATABASE_URL="postgresql://<username>:<password>@<domain.of.db.com>:<port>/<db-name>"

# Auth secret
AUTH_SECRET=super-secret-key
HASHING_ALG=HS256
JWT_EXPIRES_IN_SECONDS=86400
```


### Run
```
node server.js
```
