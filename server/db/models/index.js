const User = require("./User");
const Classroom = require("./Classroom");

// model associations

User.belongsToMany(Classroom, { through: "User_Classroom" });
Classroom.belongsToMany(User, { through: "User_Classroom" });

module.exports = {
	User,
	Classroom
};
