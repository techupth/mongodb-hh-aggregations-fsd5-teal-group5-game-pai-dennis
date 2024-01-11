// Paste the complete MQL here
// - ให้เขียน Query หายอดขายทั้งหมดในแต่ละเดือนและปี
// - โดยที่เรียงจากปีและเดือนล่าสุดไปเก่าที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      totalSalesByMonth: { $sum: "$total_price" },
    },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } },
]);
