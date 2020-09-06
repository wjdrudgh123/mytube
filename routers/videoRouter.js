import express from "express";
import routes from "../routes";
import { videoDetailController, getUploadController, postUploadController } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, postUploadController);

videoRouter.get(routes.videoDetail(), videoDetailController);

export default videoRouter;