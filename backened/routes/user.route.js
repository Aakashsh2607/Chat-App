import express from "express";

import { login, logout, signup,allUsers } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";
// route oject
const router= express.Router() 

//routing
//signup // method post
router.post('/signup', signup);
router.post("/login", login);
router.post("/logout",logout)
router.get("/allusers", secureRoute, allUsers);
export default router;