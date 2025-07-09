import { MongoUserRepository } from '../../../infrastructure/mongodb/MongoUserRepository.js';
import { CreateUser } from '../../../usecases/user/CreateUser.js';
import { LoginUser } from '../../../usecases/user/LoginUser.js';

const userRepo = new MongoUserRepository();
const createUser = CreateUser(userRepo);
const loginUser = LoginUser(userRepo);

export const registerUserHandler = async (req, res) => {
  try {
    const result = await createUser(req.body);
    res.status(201).json({ success: true, user: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const loginUserHandler = async (req, res) => {
  try {
    const result = await loginUser(req.body);
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(401).json({ success: false, message: err.message });
  }
};
