import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { upload } from './middlewares/multer.js';
import { uploadOnCloudinary } from './utils/cloudinary.js';

const app = express();

dotenv.config();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/profile', (req, res) => {
    res.render('index');
});

app.post('/profile', upload.single('avatar') ,async (req, res) => {
    console.log(req.file);
    const response = await uploadOnCloudinary(req.file.path);
    res.send({
        message: "File uploaded successfully",
        cloudinaryUrl: response.url  // URL of the uploaded file
    });
});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});