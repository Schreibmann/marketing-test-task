const Application = require("./server");
const config = require("./srv_config.json");

let app = new Application();

app.expressApp.listen(config.port, config.host, function() {
	console.log(`App listening at port ${config.port}`);
});
