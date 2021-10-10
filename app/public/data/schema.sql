DROP TABLE IF EXISTS books;
CREATE TABLE books (
id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(24) UNIQUE NOT NULL,
    author varchar(48),
    pubyear int,
    publisher varchar(48),
    pages int,
    msrp int

);

INSERT INTO books (title, author, pubyear, publisher, pages, msrp) VALUES 
("Twilight", "Stephanie Meyer", 2005, "Little Brown and Company", 498, 9.01),
("New Moon", "Stephanie Meyer", 2006, "Little Brown and Company", 563, 15.75),
("Eclipse", "Stephanie Meyer", 2007, "Little Brown and Company", 629, 16.99),
("Breaking Dawn", "Stephanie Meyer", 2008, "Little Brown and Company", 756, 13.99),
("Midnight Sun", "Stephanie Meyer", 2020, "Little Brown and Company", 658, 13.32);
