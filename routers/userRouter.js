import express from "express";
import routes from "../routes";
import { editProfileController, changePasswordController } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("users"));
userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.userDetail(), (req, res) => res.send("userDetail"));

export default userRouter;