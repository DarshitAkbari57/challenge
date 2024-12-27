import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error("MONGO_URL is not defined in the environment variables.");
}
mongoose
  .connect(mongoUrl as string, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION SUCCESSFULL");
  })
  .catch((error) => {
    console.log("NOT CONNECT", error);
  });
