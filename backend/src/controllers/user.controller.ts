import { Request, Response } from 'express';
import User from '../models/User';

export const userRegistration = async (req: Request, res: Response) => {
    const { name, email, password } = req.query;

    const user = await User.find({ email });
    if (user) {
        return res.status(200).json({ message: 'User already registered', user });
    }

    const newUser = new User({
        name,
        email,
        password,
    });

    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
};
