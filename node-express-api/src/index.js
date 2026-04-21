import { db_initialize_create } from "./db.js";
import itemRoutes from "./routes/items.js";
import authRoutes from "./routes/auth.js";
import express from 'express';
const app = express();
app.use(express.json());

import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
//const jwt_secret = process.env.JWT_SECRET;

app.use("/items", itemRoutes);
app.use("/auth", authRoutes);

app.get('/health', (req, res) => {
    res.json({ status : 'ok' })
})

app.listen(port, () => {
    console.log(`Example app istening on port ${port}`)
    //console.log(`Using JWT secret: ${jwt_secret}`);
})

db_initialize_create().then(() => {
  console.log("DB initialized and tables created");
});


