import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validate

    if (!name) {
      return res.send({ error: "name is required." });
    }
    if (!email) {
      return res.send({ error: "email is required." });
    }
    if (!password) {
      return res.send({ error: "password is required." });
    }
    if (!phone) {
      return res.send({ error: "phone is required." });
    }
    if (!address) {
      return res.send({ error: "address is required." });
    }

    // check user

    const existingUser = await userModel.findOne({ email: email });

    // existing users

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "user already registered.",
      });
    }

    // register user

    const hashedPassword = await hashPassword(password);

    // save user

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

// POST LOGIN

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation

    if (!email || !password) {
      return res.status(404).send({
        success: true,
        message: "invalid Email or Password",
      });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: true,
        message: "email not found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: true,
        message: "invalid password",
      });
    }

    // token

    const token = await JWT.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error at login",
      error,
    });
  }
};
