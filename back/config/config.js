const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  "development": {
    "username": "root",
    "password": "Wnsdud9988@@",
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "port":"3306",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
