const User = require('../models/user');                                                 //Import the User model, which represents the schema and interacts with the database for user-related operations. 

exports.login = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "Username is not in our database" });
    }

   
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.register = async (req, res) => {
  const { name, surname, username } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Create new user
    const newUser = await User.create({ name, surname, username });

    return res.status(201).json({message: "User created successfully"});
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};