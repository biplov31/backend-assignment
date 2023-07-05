import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import db from './config/database.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use('/', authRoutes);

// app.get('/createtable', (req, res) => {
//   let sql = 'CREATE TABLE users (user_id int primary key auto_increment, username varchar(50) not null, email varchar(100) unique not null, password varchar(100) not null)';
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Table created.");
//   })
// })

// app.post('/addproduct', (req, res) => {
//   let product = {Name: 'Some product', description: 'This is some product.'};
//   let sql = "INSERT INTO products VALUES ?";
//   let query = db.query(sql, product, (err, result) => {
//     if (err) throw err;
//     res.send("Product added.");
//   })
// })

// app.get('/getproduct/:id', (req, res) => {
//   let sql = `SELECT * FROM products WHERE id=${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   })
// })

// app.get('/updateproduct/:id', (req, res) => {
//   let newName = 'Updated product name';
//   let sql = `UPDATE products SET name='${newName}' WHERE id=${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   })
// })

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
})