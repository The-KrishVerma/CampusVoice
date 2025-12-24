import express from "express";
import { addBlog, getAllBlogs, deleteBlogById, getBlogById, generateContent, togglePublish, getBlogComments, addComment, updateBlogById } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";


const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), adminAuth, addBlog);
blogRouter.post("/update", upload.single('image'), adminAuth, updateBlogById);
blogRouter.get('/all', getAllBlogs);
blogRouter.post('/delete', adminAuth, deleteBlogById);
blogRouter.post('/toggle-publish', adminAuth, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComments);
blogRouter.post('/generate', adminAuth, generateContent);
blogRouter.get('/:blogId', getBlogById);



export default blogRouter;
