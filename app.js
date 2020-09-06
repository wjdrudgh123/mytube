/*
    require --> 현재 작업 폴더에서 요청하는 폴더나 이름을 찾고 없으면 
                node_module 폴더에서 찾음
*/ 

import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middleware";

const app = express();

//app.use(helmet());
app.use(helmet({ contentSecurityPolicy : false }));
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;