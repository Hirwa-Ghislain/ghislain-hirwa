const express =require('express')
const app = express()
const path = require('path')

app.set('view engine','ejs')

app.get('/addition/:numbers', (req, res) => {
    const numbersString = req.params.numbers;
    if (!numbersString) {
      res.status(400).send('Bad Request: No numbers provided.');
      return;
    }
  
    const numbers = numbersString.split(',');
    let sum = 0;
    for (const num of numbers) {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        res.status(400).send(`Bad Request: "${num}" is not a valid number.`);
        return;
      }
      sum += parsedNum;
    }
    res.send(`The sum of ${numbers} is ${sum}.`);
  });
  

  app.get('/multiplication/:numbers', (req, res) => {
    const numbersString = req.params.numbers;
    if (!numbersString) {
      res.status(400).send('Bad Request: No numbers provided.');
      return;
    }
  
    const numbers = numbersString.split(',');
    let product = 1;
    for (const num of numbers) {
      const parsedNum = parseInt(num);
      if (isNaN(parsedNum)) {
        res.status(400).send(`Bad Request: "${num}" is not a valid number.`);
        return;
      }
      product *= parsedNum;
    }
    res.send(`The product of ${numbers} is ${product}.`);
  });

app.listen(3000, () => {
  console.log("Calculator app listening at port 3000");
});

