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
        console.log("Hi")
        const article = await articleModel.getArticle(req.body.ID)
        res.send(article)
    }
    catch(err){
        console.error(err)
    }
}

module.exports = {
    getArticles,
    getArticle
}