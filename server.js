// import express and set up the express application
const express = require('express');
const app = express();//allows us to access the express library
// import the "pg" library to access pooling
const { Pool } = require('pg');// destructure  the pool module

//Create a new pool with database connection details
const pool = new Pool ({
    user: 'matthewhopper',
    host: 'localhost',
    database: 'drinks',
    password: '',
    port: 5432, //this is the default postgres port
});

app.use(express.json());//middleware that grants access to optional body data

const port = 3000; //create a variable for the port

//now we will work on routes get 1, get all, edit 1, create 1, edit 1
app.get("/goodDrinks", async (req, res) => {;
    try {
        const result = await pool.query("SELECT * FROM goodDrinks");
        res.json(result.rows)
    } catch (err){
    console.error(err);
    res.status(500).send('Error Fetching goodDrinks from Database!')
    }
});

app.get("/goodDrinks/:id", async (req, res) => {
    const { id } = req.params // the same as const id = req.params.id
    try{
        const result = await pool.query('SELECT * FROM goodDrinks WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            res.status(404).send('GoodDrinks not Found!');
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(' Error fetching goodDrinks from database!');
    }
});

app.put('/goodDrinks/:id', async (req, res) => {
    const { id } = req.params;
    const{ drinkName, liquorBase, addOns, if_ice } = req.body;
    try {
        const result = await pool.query('UPDATE goodDrinks SET drinkName = $1, liquorBase = $2, addOns = $3, if_ice = $4 WHERE id = $5 RETURNING *',[drinkName, liquorBase, addOns, if_ice, id]);
        if (result.rowCount === 0) {
            res.status(404).send('GoodDrinks not found');
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating gooddrinks');
    } 
});

app.post('/goodDrinks', async (req, res) => {
    const { drinkName, liquorBase, addOns, if_ice } = req.body;
    try {
      const result = await pool.query('INSERT INTO goodDrinks (drinkName, liquorBase, addOns, if_ice) VALUES ($1, $2, $3, $4) RETURNING *', [drinkName, liquorBase, addOns, if_ice]);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error inserting goodDrinks into database');
    }
  });

  app.delete('/goodDrinks/:id', async (req , res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM goodDrinks WHERE id = $1 RETURNING *', [id]);
        if (result.rowCount === 0) {
          res.status(404).send('GoodDrinks not found');
        } else {
          res.sendStatus(204).send('Object successfully deleted!');
        }
      } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting goodDrinks');
      }
    });


//create the listener
app.listen(port, () => {
    console.log('Server started on port 3000!')
});