/*USERSCATEGORIES DATA*/
insert into elRitual_db.usercategories (name) values ('Admin');
insert into elRitual_db.usercategories (name) values ('User');
/*SIZES DATA*/
insert into elRitual_db.sizes (name) values ('S');
insert into elRitual_db.sizes (name) values ('M');
insert into elRitual_db.sizes (name) values ('L');
insert into elRitual_db.sizes (name) values ('XL');


/*USERS DATA*/
insert into elRitual_db.users (firstName, lastName, email, userName, password, image, newsletter, userCategory_id) values ('Andres', 'Estevez', 'aestevez@gmail.com', 'aestevez', '$2a$10$hcOOjoZfrbKXDxufqaJK9OTXOGeCHsGy7o5MbnaV0yFcnMMrDRihe', 'userImage-1673980308873.jpg', NULL, 1);
insert into elRitual_db.users (firstName, lastName, email, userName, password, image, newsletter, userCategory_id) values ('Nicolas', 'Saucedo', 'nsaucedo@gmail.com', 'nsaucedo', '$2a$10$DBUIb8CFxjSme.xWesz3M.uCKx4cnWlRH9syJCnAtqdSi7Lbd5p7.', 'userImage-1675128215827.jpg', 0, 1);
insert into elRitual_db.users (firstName, lastName, email, userName, password, image, newsletter, userCategory_id) values ('Rodolfo', 'Caputto', 'rcaputto@gmail.com', 'rcaputto', '$2a$10$OB.Jaxuo5ZDov6FviZ7ht.Eyl019NkiSdFux0OAVM48OglqBIVHjS', 'userImage-1675193675682.jpg', 0, 1);
insert into elRitual_db.users (firstName, lastName, email, userName, password, image, newsletter, userCategory_id) values ('Usuario', 'Prueba', 'prueba@gmail.com', 'prueba', '$2a$10$CoOmoy1U9qx1hIvUhwnAfu7xSy/e/PspqZ5qfJAxEMs6qv.afObpW', 'user-default-image.jpg', NULL, 1);


/*PRODUCTS DATA*/

insert into elRitual_db.products (name, quota, image, price) values ('Los Piojos', 1, 'logo-el-ritual.jpg', '2000');
insert into elRitual_db.products (name, quota, image, price) values ('ACDC Blanca', 3, 'remera.jpg', '6000');
insert into elRitual_db.products (name, quota, image, price) values ('Nirvana', 6, 'remera-nirvana.jpg', '6000');
insert into elRitual_db.products (name, quota, image, price) values ('ACDC Negra', 9, 'remera-ACDC.jpg', '6000');
insert into elRitual_db.products (name, quota, image, price) values ('Soda Stereo', 12, 'remera-soda-stereo.jpg', '6000');