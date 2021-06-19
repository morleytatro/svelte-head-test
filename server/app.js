const router = require('express').Router();

router.use((_req, _res, next) => {
  console.log('hello!');
  next();
});

module.exports = router;