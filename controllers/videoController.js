import routes from "../routes";
import Video from "../models/Video";

export const homeController = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle : "Home", videos });
    } catch (err) {
        console.log(err);
        res.render("home", { pageTitle : "Home", videos: [] });
    }
}

export const searchController = (req, res) => {
    //const { term } = req.query;
    const { query : { term : searchingBy } } = req;
    res.render("search", { pageTitle : "Search", searchingBy, videos });
}

export const getUploadController = (req, res) => res.render("upload", { pageTitle : "Upload"});
export const postUploadController = (req, res) => {
    const { body : {
        videoFile, title, description
    } } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(22341241));
}

export const videoDetailController = (req, res) => res.render("videoDetail", { pageTitle : "Video Detail"});