const Sequelize = require("sequelize");
const db = require("../db");

const Classroom = db.define("classroom", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	}
});

// instance methods

// get all students in a classroom
Classroom.prototype.getStudents = async function() {
	const users = await this.getUsers();
	return users.filter(user => !user.isTeacher);
};

module.exports = Classroom;
