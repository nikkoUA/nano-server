const {Server} = require('./server');
const {serverConfig} = require('./config');

const app = new Server(serverConfig);
app.listen().then(() => {
  console.log('Server started');
}).catch((error) => {
  app.close();
  console.log('Error', error);
});
