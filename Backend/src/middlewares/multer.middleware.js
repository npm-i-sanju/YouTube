import multer from "multer";
// import multer
// set file storage and name
const storage = multer.diskStorage({
    destination: function(req, file, cb){
cb(null, "./public/temp")
    },
    filename: function(req , file, cb){
cb(null, file.originalname)
    }
})

export const upload = multer({storage,})