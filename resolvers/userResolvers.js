const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); 


const userResolvers = {
  // 1) Signup user
  async signup({ username, email, password }) {
    //for checking user already exists or nopt
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      throw new Error('User with this username or email already exists.');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await newUser.save();
    return newUser;
  },

  // 2) Login user (Query)
  async login({ usernameOrEmail, password }) {
    // Finding user by username or email
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!user) {
      throw new Error('User not found');
    }

    // Comparing the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // For generating JWT token 
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'secretkey', 
      { expiresIn: '1h' }
    );

    return {
      message: 'Login successful',
      token,
      user,
    };
  },
};

module.exports = userResolvers;
