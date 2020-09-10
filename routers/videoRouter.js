import express from "express";
import routes from "../routes";
import { videoDetailController, getUploadController, postUploadController, getEditVideoController, postEditVideoController, deleteVideoController } from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, uploadVideo, postUploadController);

videoRouter.get(routes.videoDetail(), videoDetailController);

videoRouter.get(routes.editVideo(), getEditVideoController);
videoRouter.post(routes.editVideo(), postEditVideoController);

videoRouter.get(routes.deleteVideo(), deleteVideoController);

export default videoRouter;