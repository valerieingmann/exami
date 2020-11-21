const Sequelize = require("sequelize");
const db = require("../db");

const Test = db.define("test", {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	dueDate: {
		type: Sequelize.DATE
	},
	// time limt in minutes
	timeLimit: {
		type: Sequelize.INTEGER
	}
});

module.exports = Test;
