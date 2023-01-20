-- /////////// CREATE TABLES - CREACION DE TABLAS SIN LAS FOREIGN KEYS //////////////////

--                       ///// USUARIOS  ////

CREATE TABLE users (
	user_id INT UNSIGNED AUTO_INCREMENT	NOT NULL
	firstName     VARCHAR(45) NOT NULL
	lastName	 	  VARCHAR(45) NOT NULL
	email		 	  TEXT NOT NULL
	userName	 	  VARCHAR(45) NOT NULL
	userPassword  VARCHAR(45) NOT NULL
	image		     TEXT
	newsletter    TINYINT
	PRIMARY KEY (user_id)
)

CREATE TABLE userCategories (
	userCategories_id INT UNSIGNED AUTO_INCREMENT	NOT NULL
	categoryName	VARCHAR(45) NOT NULL
PRIMARY KEY (userCategories_id)
)

--                     ///// PRODUCTOS  ////

CREATE TABLE products (
	product_id INT UNSIGNED AUTO_INCREMENT	NOT NULL
--COMPLETAR
PRIMARY KEY (product_id)
)

CREATE TABLE stock (
	stock_id INT UNSIGNED AUTO_INCREMENT	NOT NULL
--COMPLETAR
PRIMARY KEY (stock_id)
)

CREATE TABLE sizes (
	size_id INT UNSIGNED AUTO_INCREMENT NOT NULL
	name VARCHAR(15)
PRIMARY KEY (size_id)
)

CREATE TABLE genres (
	genre_id INT UNSIGNED AUTO_INCREMENT NOT NULL
	name VARCHAR(45)
PRIMARY KEY (genre_id)
)

--                   ///// CARRITO Y SHOPING /////

CREATE TABLE carts (
	cart_id INT UNSIGNED AUTO_INCREMENT	NOT NULL
	quantity TINYINT NOT NULL
	created_date DATE NOT NULL
	modified_date DATE NOT NULL
PRIMARY KEY (cart_id)
)

CREATE TABLE shopping (
	shop_id INT UNSIGNED AUTO_INCREMENT NOT NULL
	quantity TINYINT
	total_price INT
	created_date DATE
PRIMARY KEY (shop_id)
)





-- ALTER TABLES - AGREGADO DE FOREIGN KEYS ///////////////////////////////////////////////

ALTER TABLE users
ADD FOREIGN KEY (userCategory_id) REFERENCES users(id)

ALTER TABLE products

ALTER TABLE stock


ALTER TABLE carts
ADD FOREIGN KEY (product_id) REFERENCES products(id)
ADD FOREIGN KEY (user_id) REFERENCES users(id)

ALTER TABLE shopping    
ADD FOREIGN KEY (product_id) REFERENCES products(id)
ADD FOREIGN KEY (user_id) REFERENCES users(id)

CREATECREATE