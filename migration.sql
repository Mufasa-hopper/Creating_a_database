--next we have to connect to the database created in the db.sql
\c drinks;

--next we will drop the table "goodDrinks" if it exists
DROP TABLE IF EXISTS goodDrinks;
--next we will create the table goodDrinks;
CREATE TABLE goodDrinks(
    id serial,
    drinkName varchar,
    liquorBase varchar,
    addOns varchar,
    if_ice boolean
);

--seed the table with information using "INSERT INTO", then "VALUES"
INSERT INTO goodDrinks (drinkName, liquorBase, addOns, if_ice) VALUES('Tequila Sunrise', 'Tequila', 'orange juice and grenadine syrup', true);
INSERT INTO goodDrinks (drinkName, liquorBase, addOns, if_ice) VALUES('Old Fashioned', 'Whiskey', 'sugar cube, bitters, orange slice, and a cherry', true);
INSERT INTO goodDrinks (drinkName, liquorBase, addOns, if_ice) VALUES('Dark and Stormy','Rum', 'ginger beer and lime', true);
INSERT INTO goodDrinks (drinkName, liquorBase, addOns, if_ice) VALUES('Martini', 'Gin', 'dry vermouth, lemon twist, and olives', false);