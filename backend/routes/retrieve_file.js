import express from 'express';
import upload from '../middleware/image_upload.js'
import {retrieveFile} from "../controllers/retrieve_file.js";

const router = express.Router();

router.post('/', upload.single('image'), retrieveFile);

export default router;