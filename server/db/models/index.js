const User = require("./User");
const Classroom = require("./Classroom");
const Test = require("./Test");

// model associations

User.belongsToMany(Classroom, { through: "User_Classroom" });
Classroom.belongsToMany(User, { through: "User_Classroom" });

User.hasMany(Test);
Test.belongsTo(User);

Classroom.belongsToMany(Test, { through: "Classroom_Test" });
Test.belongsToMany(Classroom, { through: "Classroom_Test" });

module.exports = {
	User,
	Classroom,
	Test
};
