import mongoose from "mongoose";
import { Password } from "../services/password";

// An interface describing the properties
// required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

// An interface decribing the properties
// that a User model has
interface UserModel extends mongoose.Model<Userdoc> {
  build(attrs: UserAttrs): Userdoc;
}

// An interface scribing the properties of a
// User document has
interface Userdoc extends mongoose.Document {
  email: string;
  password: string;
}




const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

export const User = mongoose.model<Userdoc, UserModel>("User", userSchema);
