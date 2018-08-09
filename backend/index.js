const Application = require('./server');
const config = require('./srv_config.json');

const app = new Application();

app.expressApp.listen(config.port, config.host, () => {
  console.log(`App listening at port ${config.port}`);
});
