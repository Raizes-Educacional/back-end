import multer from "multer";
import path from "path";
import crypto from 'crypto'


//Getting the path from the temp folder

//Multer-setting
export default {
    // Directory that will be saved in the folder 
    directory: '/files',
    //Passing how to save the movie and where
    storage: multer.diskStorage({
        destination: '/files',
        filename(request, file, callback){
            // Circle an exadecimal number with 10 byts
            const fileHash = crypto.randomBytes(10).toString('hex');
            // Add name original sum file has
            const filename = `${fileHash}-${file.originalname}`;
            return callback(null, filename);
        }
    })
}