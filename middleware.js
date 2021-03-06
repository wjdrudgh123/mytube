import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "MyTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 1
    }
    next();
}

export const uploadVideo = multerVideo.single("videoFile"); // single에 html 폼에서 tpye=file의 name