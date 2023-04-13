CREATE DATABASE IF NOT EXISTS noticias;
USE noticias;

DROP TABLE IF EXISTS user_unlike_news;
DROP TABLE IF EXISTS user_like_news;
DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(100) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                registrationCode VARCHAR(250)
                
            );
			
CREATE TABLE IF NOT EXISTS news (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                title VARCHAR(100) NOT NULL,
                photo VARCHAR(255),
                leadIn VARCHAR(100) NOT NULL,
                text VARCHAR(255) NOT NULL,
                theme VARCHAR(100) NOT NULL,
                idUser INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES user(id)
                ON DELETE CASCADE

            );
			
CREATE TABLE IF NOT EXISTS user_like_news (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                idUser INT UNSIGNED NOT NULL,
                idNews INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES user(id) ON DELETE CASCADE,
                FOREIGN KEY (idNews) REFERENCES news(id) ON DELETE CASCADE
            );
			
CREATE TABLE IF NOT EXISTS user_unlike_news (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                idUser INT UNSIGNED NOT NULL,
                idNews INT UNSIGNED NOT NULL,
                FOREIGN KEY (idUser) REFERENCES user(id) ON DELETE CASCADE,
                FOREIGN KEY (idNews) REFERENCES news(id) ON DELETE CASCADE
            );

INSERT INTO user (username, email, password)
             VALUES ('userPrueba', 'prueba@gmail.com', '123');
			 
INSERT INTO news (title, leadIn, text, theme,idUser)
             VALUES ('NoticiaPrueba', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit','Actualidad',1);
			 
INSERT INTO user_like_news (id,idUser,idNews)
             VALUES (1,1,1);
INSERT INTO user_unlike_news (id,idUser,idNews)
             VALUES (1,1,1);
			 

