const {initialBlog} = require('../public/javascripts/initialBlog')

const getAllBlogs = (req, res) => {
    console.log("get all")
    res.render('index', {blogs: initialBlog})
}

const addBlog = (req, res) => {
    console.log("add blog");
    console.log(req.body.title);
    const data = {
        id: initialBlog.length + 1,
        title: req.body.title,
        content: req.body.content,
        comments: []
    }
    initialBlog.push(data)
    res.render('index', {blogs: initialBlog})
}

const deleteBlog = (req, res) => {
    console.log("delete blog");
    const id = req.params.id
    console.log("delete blog ", id);
    const index = initialBlog.findIndex(data => data.id === Number(id))
    initialBlog.splice(index, 1)
    res.render('index', {blogs: initialBlog})
}
module.exports = {
    getAllBlogs,
    addBlog,
    deleteBlog
}