const express = require('express');
const router = express.Router();
const Review = require('../models/Reviews');

router.get('/reviews', async (req, res) => {
    const allReviews = await Review.find()
    res.send(allReviews)
});

router.post('/review', async (req, res) => {
  try {
    const review = await new Review(req.body).save();
    res.json(review);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
