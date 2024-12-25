import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';   //file system module inbuilt in nodejs
import dotenv from 'dotenv';

dotenv.config();

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath) => {  //localFilePath -> from multer
    try {
        if (!localFilePath) throw new Error('File path is required');
        // Upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: "uploads",  //folder name where file will be stored
            resource_type: "auto"  //auto detect the file type
        })
        //file has been uploaded successfully
        console.log("File uploaded successfully", response.url); //response. many options available like url, public_id,size,format,original_filename etc
        return response;
    } catch (err) {
        //agr file upload ni hua cloudinary pa to catch error block execute hoga 
        //but hmara pas localfilepath aa chuka hoga that means ki server pa file upload ho chuka hai
        // to for safe purpose hma wo file server sa hta dena chiya using unlink option of "fs"(may be file corrupted ho islia upload ni hua )
        // removes the locally saved temporary file as the upload operation got failed
        console.error("Cloudinary upload failed:", err);

        // Attempt to delete the local file
        try {
            fs.unlinkSync(localFilePath); // This will throw an error if deletion fails
            console.log("Local file deleted successfully.");
        } catch (unlinkErr) {
            console.error("Failed to delete local file:", unlinkErr);
        }
    }
}