
const uploadProfileController = (req, res) => {
    console.log(req.file);
    console.log(req.file.path);

    return res.send('image sent successfully');
}

export {uploadProfileController};
