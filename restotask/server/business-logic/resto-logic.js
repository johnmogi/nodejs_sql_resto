const dal = require("../db/dal");


async function getAllRestosAsync() {
    const sql = "SELECT restId as id, restname as name FROM  restaurants"
    // const sql = "SELECTP roductID as id, ProductName as nam e, UnitPrice as price, UnitsInStock as stock FROM Products";
    const restos = await dal.executeAsync(sql);
    return restos;
}

async function getAllReviewsAsync() {
    const sql = "SELECT reviews.date, reviews.visitor, reviews.review , restaurants.restName FROM reviews INNER JOIN restaurants ON reviews.restId = restaurants.restId"
    // const sql = "SELECTP roductID as id, ProductName as nam e, UnitPrice as price, UnitsInStock as stock FROM Products";
    const restos = await dal.executeAsync(sql);
    return restos;
}
async function addReview(review) {
    const sql = `INSERT INTO reviews(restId , date , visitor , review)
    VALUES('${review.restId}' , '${review.date}' , '${review.visitor}' , '${review.review}')`;
    const info = await dal.executeAsync(sql);
    review.id = info.insertID;
    return review;
}

module.exports = {
    getAllRestosAsync,
    getAllReviewsAsync,
    addReview
}