// Paste the complete MQL here
//- ให้เขียน Query หายอดขายทั้งหมดในแต่ละปี
//- โดยที่เรียงจากปีล่าสุดไปเก่าที่สุด
db.pizzaOrders.aggregate([
    { $group : {_id : {$year : "$created_at"}  , totalSalesPerYear : {$sum : "$total_price" }}},
    { $sort : {_id : -1}}
  ])