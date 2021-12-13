import * as _ from "mongoose";

const UserSchema = new _.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: false },
  birthDay: { type: Date, required: false },
});

const User = _.model("User", UserSchema);

export default User;
export { User };
