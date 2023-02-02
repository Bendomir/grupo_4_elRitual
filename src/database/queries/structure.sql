CREATE SCHEMA `elRitual_db` DEFAULT CHARACTER SET utf8mb4 ;


CREATE TABLE elRitual_db.users (
	user_id				INT UNSIGNED AUTO_INCREMENT	NOT NULL,
	firstName			VARCHAR(45) NOT NULL,
	lastName			VARCHAR(45) NOT NULL,
	email				TEXT NOT NULL,
	userName			VARCHAR(45) NOT NULL,
	password 			TEXT NOT NULL,
	image				TEXT,
	newsletter  		TINYINT,
    userCategory_id 	INT UNSIGNED NOT NULL,
	createdAt 			DATE,
	updatedAt 			DATE,
PRIMARY KEY (user_id)
);

CREATE TABLE elRitual_db.userCategories (
	userCategory_id 	INT UNSIGNED AUTO_INCREMENT	NOT NULL,
	name				VARCHAR(45) NOT NULL,
PRIMARY KEY (userCategory_id)
);

--                     ///// PRODUCTOS  ////

CREATE TABLE elRitual_db.products (
	product_id 			INT UNSIGNED AUTO_INCREMENT	NOT NULL,
	name 				VARCHAR(60) NOT NULL,
	quota  				TINYINT,
	image  				TEXT NOT NULL,
	price  				INT NOT NULL,
	createdAt 			DATE,
	updatedAt 			DATE,
PRIMARY KEY (product_id)
);

CREATE TABLE elRitual_db.stock (
	stock_id 			INT UNSIGNED AUTO_INCREMENT NOT NULL,
	quantity 			TINYINT,
    product_id 			INT UNSIGNED NOT NULL,
    size_id 			INT UNSIGNED NOT NULL,
PRIMARY KEY (stock_id)
);

CREATE TABLE elRitual_db.sizes (
	size_id 			INT UNSIGNED AUTO_INCREMENT NOT NULL,
	name 				VARCHAR(15),
PRIMARY KEY (size_id)
);

--                   ///// CARRITO Y SHOPING /////

CREATE TABLE elRitual_db.carts (
	cart_id 			INT UNSIGNED AUTO_INCREMENT	NOT NULL,
	quantity 			TINYINT NOT NULL,
	createdAt 			DATE,
	updatedAt 			DATE,
    product_id 			INT UNSIGNED NOT NULL,
    user_id 			INT UNSIGNED NOT NULL,
PRIMARY KEY (cart_id)
);

CREATE TABLE elRitual_db.shopping (
	shop_id 			INT UNSIGNED AUTO_INCREMENT NOT NULL,
	quantity 			TINYINT,
	total_price 		INT,
	createdAt 			DATE,
	updatedAt			DATE,
    product_id 			INT UNSIGNED NOT NULL,
    user_id 			INT UNSIGNED NOT NULL,
PRIMARY KEY (shop_id)
);


-- ALTER TABLES - AGREGADO DE FOREIGN KEYS ///////////////////////////////////////////////



ALTER TABLE elRitual_db.users
	ADD CONSTRAINT userCategory_id
		FOREIGN KEY (userCategory_id)
		REFERENCES userCategories(userCategory_id);

ALTER TABLE elRitual_db.stock
	ADD CONSTRAINT productStock_id
		FOREIGN KEY (product_id) 
		REFERENCES products(product_id),
	ADD CONSTRAINT size_id
		FOREIGN KEY (size_id) 
		REFERENCES sizes(size_id);

ALTER TABLE elRitual_db.carts
	ADD CONSTRAINT productCart_id
		FOREIGN KEY (product_id) 
		REFERENCES products(product_id),
	ADD CONSTRAINT userCart_id
		FOREIGN KEY (user_id) 
		REFERENCES users(user_id);

ALTER TABLE elRitual_db.shopping    
	ADD CONSTRAINT productShop_id
		FOREIGN KEY (product_id) 
		REFERENCES products(product_id),
	ADD CONSTRAINT userShop_id
		FOREIGN KEY (user_id) 
		REFERENCES users(user_id);
