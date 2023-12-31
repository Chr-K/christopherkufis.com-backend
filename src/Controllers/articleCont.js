const articleModel = require('./Models/articleMod')


async function getArticles(req,res){
    try{
        const articles = await articleModel.getArticles()
        res.send(articles)
    }
    catch(err){
        console.error(err)
    }
}

module.exports = {
    getArticles,
}