import User from '../models/User.js';
import mongoose from 'mongoose';

const uploadProfileController = (req, res) => {
    // console.log(req.file);
    // console.log(req.file.path);
    // console.log(res.locals.userId);

    User.findByIdAndUpdate({_id: res.locals.userId}, { profilePicture: req.file.path },
        {new: true},
        function (err, doc) {
            if (err) {
                console.log(err)
            }
            // console.log(doc);

        });

    return res.send('image sent successfully');
}

export { uploadProfileController };
