const {initialBlog} = require('../public/javascripts/initialBlog')

const addComment = (req, res) => {
    console.log("add comment");
    const idBlog = req.body.idBlog
    console.log("add comment ", idBlog);
    const data = initialBlog.filter(b => b.id === Number(idBlog))[0];
    console.log(data);
    const dataComment = {
        id: data.comments.length + 1,
        content: req.body.contentComment
    }
    const result = {
        ...data,
        comments: data.comments.push(dataComment)
    }
    initialBlog.forEach(data => {
        if (data.id === idBlog) {
            data = result
        }
    })
    res.render('index', {blogs: initialBlog})
}

module.exports = {
    addComment
}