// Paste the complete MQL here
// - ให้เขียน Query กรอง Document ที่ได้จาก **Exercise #2**
// - ให้แสดงผลแค่ข้อมูลยอดขายทั้งหมดและจำนวนของ Pizza ใน Size `medium`
db.pizzaOrders.aggregate([
    { $group : {_id: "$size"  , totalPrice : {$sum : "$total_price" } , quantiy :{$sum : "$quantity"}}},
    { $sort : {totalPrice : -1}},
    { $match : {_id : "medium"}}
    
  ])