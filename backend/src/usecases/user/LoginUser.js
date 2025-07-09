import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const LoginUser = (userRepository) => async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return { token, user: { id: user._id, email: user.email } };
};
