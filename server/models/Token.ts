import * as _ from "mongoose";

const TokenSchema = new _.Schema({
  email: { type: String, required: true },
  token: { type: String, required: true },
});

const Token = _.model("Token", TokenSchema);

export default Token;
export { Token };
