const express = require("express");
const restoLogic = require("../business-logic-layer/resto-logic");
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
router.get("/reviews", async (request, response) => {
    try {
        const reviews = await restoLogic.getAllReviewsAsync();
        response.json(reviews);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

router.post("/reviews", async (request, response) => {
    try {
        const review = request.body;
        const addedReview = await reviewLogic.addReviewAsync(review);
        response.status(201).json(addedReview);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;