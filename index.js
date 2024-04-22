require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const connectDB = require("./connectDb");
const applyRoutes = require("./routes");
const PORT = process.env.PORT || 8080;

applyRoutes(app);

if (!module.parent) {
	connectDB(process.env.MONGOD_DB_URI);

	app.listen(PORT, () => {
		console.log(`Server is listening on PORT ${PORT}`);
	});
}

module.exports = app;
