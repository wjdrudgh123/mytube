import routes from "../routes";

export const getJoinController = (req, res) => {
    res.render("join", { pageTitle : "Join"});
}

export const postJoinController = (req, res) => {
    const { body : { name, email, password, password2 } } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle : "Join"});
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
}

export const getLoginController = (req, res) => res.render("login", { pageTitle : "Log In"});
export const postLoginController = (req, res) => {
    res.redirect(routes.home);
}

export const logoutController = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
}
export const editProfileController = (req, res) => res.render("editProfile", { pageTitle : "Edit Profile"});
export const changePasswordController = (req, res) => res.render("changePassword", { pageTitle : "Change Password"});