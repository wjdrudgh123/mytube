import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology : true
}); // mongodb://localhost:포트/데이터베이스이름

const db = mongoose.connection;

const handleOpen = () => console.log("connected to DB");
const handleError = (err) => console.log(`Error on Db Connection: ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);