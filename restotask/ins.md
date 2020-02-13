1. create db:

{restask}

restaurants:
restId, restName
reviews:
restId, visitor, date, review

add demo data

created db with 2 tables and id connected.

2. install server
cd server
app.js
npm init -y
npm i express cors mysql

{create :}
db-logic
[dal.js]
business-logic
[resto-logic.js]
controller
[resto-controller.js]
models
[restoraunt.js]

