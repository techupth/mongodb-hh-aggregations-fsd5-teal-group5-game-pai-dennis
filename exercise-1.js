// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: { _id: "$credit_card_type", total_paid: { $avg: "$total_price" } },
  },
]);
