const router = require("express").Router();

const  cloudinary = require("../utils/cloudinary")
const  upload = require("../utils/multer")
const File = require("../models/File");

router.post("/",upload.single("file"), async(req,res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        
        const user = new File({
            name: req.body.name,
            type: req.body.type,
            body: result.secure_url
        })
        await user.save();
        res.json(user);

    } catch (err) {
        console.log(err)
    }
})

router.get("/", async (req, res) => {
    try {
        const files = await File.find();
        res.json(files)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router; 