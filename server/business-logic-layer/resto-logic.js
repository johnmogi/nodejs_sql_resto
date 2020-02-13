const dal = require("../data-access-layer/dal");

async function getAllRestosAsync() {
    const sql = "SELECT restid as id, restaurant as name FROM restaurant"
    // const sql = "SELECTP roductID as id, ProductName as nam e, UnitPrice as price, UnitsInStock as stock FROM Products";
    const restos = await dal.executeAsync(sql);
    return restos;
}

async function getAllReviewsAsync() {
    const sql="SELECT reviews.restcode, reviews.date, reviews.visitor, reviews.review , restaurant.restaurant FROM reviews INNER JOIN restaurant ON reviews.restid = restaurant.restid"
    const reviews = await dal.executeAsync(sql);
    return reviews;
}

async function addReviewAsync(review) {
    const sql = `
        INSERT INTO reviews(date, visitor, review)
        VALUES('${review.date}',${review.visitor},${review.review})`;
    const info = await dal.executeAsync(sql); // זהו אובייקט המכיל מידע לגבי ההוספה שהתבצעה info
    review.id = info.insertId; // הקוד החדש שמסד הנתונים יצר
    return review;
}


// FROM Products INNER JOIN Categories
// ON Products.CategoryID = Categories.CategoryID
module.exports = {
    getAllRestosAsync,
    getAllReviewsAsync,
    addReviewAsync
}