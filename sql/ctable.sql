CREATE TABLE user 
(
	id VARCHAR(20) PRIMARY KEY,
	password VARCHAR(20)
);

CREATE TABLE main_page 
(
	id VARCHAR(20) PRIMARY KEY,
	menuOrder VARCHAR(400),
	font VARCHAR(30),
	fontsize VARCHAR(20),
	background VARCHAR(20)
);

CREATE TABLE menu_page
(
	id VARCHAR(20) PRIMARY KEY,
	menuOrder VARCHAR(400),
	nav VARCHAR(20),
	font VARCHAR(30),
	fontsize VARCHAR(20),
	background VARCHAR(20)
);

CREATE TABLE slide
(
	id VARCHAR(20) PRIMARY KEY,
	1by1 VARCHAR(4),
	font VARCHAR(30),
	fontsize VARCHAR(20),
	t_color VARCHAR(30),
	c_color VARCHAR(30)
);