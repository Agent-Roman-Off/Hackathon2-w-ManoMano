const express = require('express');
const cors = require('cors');
const { db } = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/consumables', async (req, res) => {
  try {
    const [lists] = await db.query(
      `SELECT DISTINCT(idConsumables)
      FROM articles
      INNER JOIN consumables ON articles.id = consumables.idArticles
      INNER JOIN orderline ON articles.id = orderline.idArticles
      INNER JOIN orders ON orderline.idOrders = orders.id 
      INNER JOIN users ON orders.idUsers  = users.id
      WHERE users.id = 1
      ;`
    );
    const auto = lists.map((list) => {
      return list.idConsumables;
    });
    console.log(auto);
    const [listArticles] = await db.query(
      `
    SELECT *
    FROM articles 
    WHERE id IN (?)
  `,
      [auto]
    );
    res.json(listArticles);
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
});

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(5050, () => {
  console.log('Terra Battle API now available on http://localhost:5050 !');
});
