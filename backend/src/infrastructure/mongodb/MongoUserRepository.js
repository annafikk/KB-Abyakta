import { UserRepository } from "../../domain/user/UserRepository.js";
import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
      type: String,
      enum: ["admin", "citizen", "writer"],
      default: "citizen",
    },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);

export class MongoUserRepository extends UserRepository {
  async create(user) {
    const hashed = await bcrypt.hash(user.password, 10);
    const created = await UserModel.create({ ...user, password: hashed });
    return created;
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }
}
