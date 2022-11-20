
const requireValidCategory = (req, res, next) => {
    var category = req.params.category;
    if (category !== "earning" && category !== "expense") {
        return res.status(400).send('category not found');
    } else{
        next();
    }
}

export default requireValidCategory;