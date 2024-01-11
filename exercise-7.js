db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      totalSalesByMonth: { $sum: "$total_price" },
      quantity: { $sum: "$quantity" },
    },
  },
  { $match: { "_id.year": 2021 } },
  { $sort: { totalSalesByMonth: 1 } },
  { $limit: 1 },
]);
