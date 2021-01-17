# MODEL

Criando o banco de dados para usar como exemplo:
```sql
CREATE DATABASE IF NOT EXISTS model_example;

USE model_example;

CREATE TABLE IF NOT EXISTS authors (
	id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  middle_name VARCHAR(30),
  last_name VARCHAR(30) NOT NULL,
  birthday DATE,
  nationality VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO authors (first_name, middle_name, last_name, birthday, nationality)
VALUES
	('George', 'R. R.', 'Martin', '1948-09-20', 'norte-americano'),
	('J.', 'R. R.', 'Tolkien', '1892-01-03', 'britânico'),
	('Isaac', NULL, 'Asimov', '1920-01-20', 'russo-americano'),
	('Frank', NULL, 'Herbert', '1920-02-11', 'norte-americano'),
	('Júlio', NULL, 'Verne', '1905-03-24', 'francês');
```
Instalando o driver para se conectar com o MySQL:
```bash
npm install mysql2
```

```js
use model_example;
db.authors.insertMany([
  { "firstName": "George", "middleName": "R. R.", "lastName": "Martin", "birthday": "1948-09-20", "nationality": "norte-americano" },
  { "firstName": "J.", "middleName": "R. R.", "lastName": "Tolkien", "birthday": "1892-01-03", "nationality": "britânico" },
  { "firstName": "Isaac", "lastName": "Asimov", "birthday": "1920-01-20", "nationality": "russo-americano" },
  { "firstName": "Frank", "lastName": "Herbert", "birthday": "1920-02-11", "nationality": "norte-americano" },
  { "firstName": "Júlio", "lastName": "Verne", "birthday": "1905-03-24", "nationality": "francês" }
]);
```
Instalando o driver para se conectar com o MongoDB:
```bash
npm install mongodb
```
