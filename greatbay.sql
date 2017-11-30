DROP DATABASE IF EXISTS bay_itemsDB;

CREATE DATABASE bay_itemsDB;

USE bay_itemsDB;

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  category VARCHAR(45) NOT NULL,
	price INTEGER(12) NOT NULL,
  PRIMARY KEY (id)
  );

  SELECT * FROM items;

  INSERT INTO items (item, category, price)
  VALUES ("1952 Red Corvette", "Automobile", 33000);

  INSERT INTO items (item, category, price)
  VALUES ("Nintendo Entertainment System", "Gaming", 200);

  INSERT INTO items (item, category, price)
  VALUES ("Gutenberg Bible (1454 ed.)", "Book", 22000);
