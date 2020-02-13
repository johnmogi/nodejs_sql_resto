const express = require("express");
const restoLogic = require("../business-logic/resto-logic");
const router = express.Router();

// GET http://localhost:3000/api/products
router.get("/restaurants", async (request, response) => {
    try {
        const restos = await restoLogic.getAllRestosAsync();
        response.json(restos);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

// GET http://localhost:3000/api/products
router.get("/reviews", async (request, response) => {
    try {
        const restos = await restoLogic.getAllReviewsAsync();
        response.json(restos);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

router.post('/reviews', async (request, response) => {
    try {
        const review = request.body;
        const addedReview = await restoLogic.addReview(review);
        response.status(201).json(addedReview);
    } catch (error) {
        response.status(500).send(error.message);
    }
})

module.exports = router;