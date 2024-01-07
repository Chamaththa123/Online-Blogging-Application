const express = require('express');
const router = express.Router();
const articleModel = require('../model/article');

router.post('/article/save', async(req,res)=>{

    const article = new articleModel(req.body)
    try{
        await article.save();
        res.status(201).send(
            {
                'status' : true,
                'message' : ' article added !!!'
            }
        );
    } catch(error){
        res.status(400).send(error);
    }
});

router.route("/article/get").get((req,res) => {
    articleModel.find().then((article) => {
        res.json(article)
    }).catch((err) => {
        console.log(err);
    })
})

router.get('/article/get/:id', async (req, res) => {
    const articleId = req.params.id;

    try {
        const article = await articleModel.findById(articleId).exec();
        if (!article) {
            return res.status(404).json({ success: false, error: 'Article not found' });
        }
        return res.status(200).json({ success: true, article });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
});


router.put('/article/update/:id', async (req, res) => {
    try {
        const updatedArticle = await articleModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // This option ensures the updated document is returned
        );

        if (!updatedArticle) {
            return res.status(404).json({ error: "Article not found" });
        }

        return res.status(200).json({
            success: "Updated successfully",
            article: updatedArticle
        });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

router.delete("/article/delete/:id", async(req,res) =>{
    let result = await articleModel.deleteOne({_id:req.params.id})
    res.send(result)
});

module.exports = router;