const fs = require('fs');
const path = require('path');
const express = require('express');
const {createRouter} = require('./router');

exports.Server = class {

  constructor(config) {
    this._config = config;
    this._app = null;
    this._server = null;
  }

  listen() {
    return new Promise((resolve) => {
      if (this._server) return this;

      this._app = express();

      //TODO: Create config file with Static files path
      const staticPath = path.join(__dirname, './static');
      if (fs.existsSync(staticPath))
        this._app.use(express.static(staticPath));

      this._app.use('/', createRouter());

      let {port, host} = this._config;
      this._server = this._app.listen(port, host, resolve);
    });
  }

  close() {
    return new Promise((resolve) => {
      if (!this._server) return this;

      this._server.close(resolve);

      this._server = null;
      this._app = null;
    });
  }
}
