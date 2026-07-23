// total sales per category
db.orders.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$items.category", total: { $sum: "$items.price" } } },
  { $sort: { total: -1 } },
]);
