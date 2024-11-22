let express = require('express');
let cors = require('cors');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(cors());

// Calculate the Returns of the Stocks added

function calculateReturns(boughtAt, marketPrice, quantity) {
  let result = (marketPrice - boughtAt) * quantity;
  return result.toString();
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  res.send(calculateReturns(boughtAt, marketPrice, quantity));
});

// Calculate the Total Returns

function totalReturn(stocks1, stock2, stock3, stock4) {
  let result = stocks1 + stock2 + stock3 + stock4;

  return result.toString();
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalReturn(stock1, stock2, stock3, stock4));
});

// Calculate the Return Percentage

function calreturnPercentage(boughtAt,returns) {
  let result = (returns / boughtAt) * 100;

  return result.toString();
}

app.get('/calculate-return-percentage',(req,res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  res.send(calreturnPercentage(boughtAt,returns));
});

// Calculate the Total Return Percentage

function returnPercentage(stock1, stock2, stock3, stock4) {
  let result = stock1 + stock2 + stock3 + stock4;

  return result.toString();
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(returnPercentage(stock1, stock2, stock3, stock4));
});

//  Identify the Status of Stocks based on their Return Value

function calculateReturnPercentage(returnPercentage) {
  if (returnPercentage > 0) {
    return 'profit';
  } else {
    return 'loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  res.send(calculateReturnPercentage(returnPercentage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
