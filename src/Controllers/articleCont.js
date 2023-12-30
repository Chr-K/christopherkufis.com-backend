import getArticles from '../Models/articleMod';

async function fetchArticles(req,res){
    try{
        const articles = getArticles();
        res.json(articles);
    }
    catch(error){
        console.error("Error getting articles: ",error);
        res.status(500).json({error: "Internal server error"})
    }
}

export default fetchArticles