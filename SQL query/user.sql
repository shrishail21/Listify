

CREATE TABLE user (user_id int PRIMARY KEY AUTO_INCREMENT ,firstName VARCHAR(25),lastName VARCHAR(25),email VARCHAR(50) UNIQUE NOT NULL,password VARCHAR(200) NOT NULL, address VARCHAR(200),phone VARCHAR(15) NOT NULL,created_time DATETIME default CURRENT_TIMESTAMP);
