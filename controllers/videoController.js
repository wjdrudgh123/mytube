import routes from "../routes";
import Video from "../models/Video";

export const homeController = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
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
export const postUploadController = async (req, res) => {
    const { body : { title, description },
            file: { path } 
    } = req;
    const newVideo = await Video.create({ 
        fileUrl: path,
        title,
        description
    });
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetailController = async (req, res) => {
    const { params : { id } } = req;
    try { 
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle : `${video.title}`, video});
    } catch (err) {
        console.log(err);
        res.redirect(routes.home);
    }
}

export const getEditVideoController = async (req, res) => {
    const { params : { id } } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle : `Edit ${video.title}`, video});
    } catch (err) {
        console.log(err);
        res.redirect(routes.home);
    }
}
export const postEditVideoController = async (req, res) => {
    const { 
        params : { id },
        body : { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate( { _id:id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (err) {
        console.log(err);
        res.redirect(routes.home);
    }
}

export const deleteVideoController = async (req, res) => {
    const { params: { id } } = req;
    try { 
        await Video.findOneAndRemove({ _id: id });
    } catch (err) {
        console.log(err);
    }
    res.redirect(routes.home);
}