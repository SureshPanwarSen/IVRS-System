const Router = require('express').Router;
const {welcome, menu, financialDept,
  getHelp, salesDept, techSupport} = require('./handler');

const router = new Router();

// GET: /fg/welcome
router.get('/welcome', (req, res) => {
  res.send(welcome());
});

// POST: /fg/menu
router.post('/menu', (req, res) => {
  const digit = req.body.Digits;
  return res.send(menu(digit));
});

// POST: /fg/salesDept
router.post('/salesDept', (req, res) => {
  const digit = req.body.Digits;
  res.send(salesDept(digit));
});

// POST: /fg/techSupport
router.post('/techSupport', (req, res) => {
  const digit = req.body.Digits;
  res.send(techSupport(digit));
});

// POST: /fg/financial
router.post('/financial', (req, res) => {
  const digit = req.body.Digits;
  res.send(financialDept(digit));
});

// POST: /fg/help
router.post('/help', (req, res) => {
  const digit = req.body.Digits;
  res.send(getHelp(digit));
});

module.exports = router;
