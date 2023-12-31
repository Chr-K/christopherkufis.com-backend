const articleModel = require('../Models/articleMod')


async function getArticles(req,res){
    try{
        const articles = await articleModel.getArticles()
        res.send(articles)
    }
    catch(err){
        console.error(err)
    }
}
async function getArticle(req,res){
    try{
        const article = await articleModel.getArticle(req.body.ID)
        res.send(article)
    }
    catch(err){
        console.error(err)
    }
}
async function createArticle(req,res){
    try{
        const article = await articleModel.createArticle(req.body)
        res.send(article)
    }
    catch(err){
        console.error(err)
    }
}
async function deleteArticle(req,res){
    try{
        const article = await articleModel.deleteArticle(req.body.id)
        res.send(article)
    }
    catch(err){
        console.error(err)
    }
}

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle
}