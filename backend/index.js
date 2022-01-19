const express = require('express');
const cors = require('cors');
const { db } = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/article', async (req, res) => {
  const list = db.query(
    `SELECT DISTINCT(idConsumables)
      FROM articles
      INNER JOIN consumables ON articles.id = consumables.idArticles
      INNER JOIN orderline ON articles.id = orderline.idArticles
      INNER JOIN orders ON order.id = orderline.idOrders
      INNER JOIN users ON users.id = orderline.idOrders
      ;`
  );
  try {
    const [listArticles] = await db.query(`
    SELECT article
    FROM id in (${list})
  `);
    res.json(listArticles);
  } catch (err) {
    console.warn(err);
    res.status(404).send();
  }
});

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

app.listen(5050, () => {
  console.log('Terra Battle API now available on http://localhost:5050 !');
});
