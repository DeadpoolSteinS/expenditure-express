const express = require("express");
const expenditureRouter = express.Router();
const { Expenditure } = require("../models/expenditure");

expenditureRouter.get("/api/expenditures/", async (req, res) => {
  try {
    const expenditure = await Expenditure.find({});
    res.json(expenditure);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

expenditureRouter.post("/api/add-expenditure", async (req, res) => {
  try {
    const { name, category, price, created_at } = req.body;
    let expenditure = new Expenditure({
      name,
      price,
      category,
      created_at,
    });
    expenditure = await expenditure.save();
    res.json(expenditure);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// create a get request to search products and get them
// expenditureRouter.get("/api/products/search/:name", async (req, res) => {
//   try {
//     const products = await Product.find({
//       name: { $regex: req.params.name, $options: "i" },
//     });

//     res.json(products);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// // create a post request route to rate the product.
// expenditureRouter.post("/api/rate-product", async (req, res) => {
//   try {
//     const { id, rating } = req.body;
//     let product = await Product.findById(id);

//     for (let i = 0; i < product.ratings.length; i++) {
//       if (product.ratings[i].userId == req.user) {
//         product.ratings.splice(i, 1);
//         break;
//       }
//     }

//     const ratingSchema = {
//       userId: req.user,
//       rating,
//     };

//     product.ratings.push(ratingSchema);
//     product = await product.save();
//     res.json(product);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// expenditureRouter.get("/api/deal-of-day", async (req, res) => {
//   try {
//     let products = await Product.find({});

//     products = products.sort((a, b) => {
//       let aSum = 0;
//       let bSum = 0;

//       for (let i = 0; i < a.ratings.length; i++) {
//         aSum += a.ratings[i].rating;
//       }

//       for (let i = 0; i < b.ratings.length; i++) {
//         bSum += b.ratings[i].rating;
//       }
//       return aSum < bSum ? 1 : -1;
//     });

//     res.json(products[0]);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

module.exports = expenditureRouter;
