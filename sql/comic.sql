DROP TABLE IF EXISTS comics;

CREATE TABLE comics (
  id int unsigned AUTO_INCREMENT,
  comic_service_name VARCHAR(100) Not Null,
  comic_title VARCHAR(100) Not Null,
  volumes int unsigned Not Null,
  status VARCHAR(50) Not Null,
  PRIMARY KEY(id)
);
INSERT INTO comics (comic_service_name, comic_title, volumes, status) VALUES ("コミックシーモア", "鬼滅の刃", 23, "完結");
INSERT INTO comics (comic_service_name, comic_title, volumes, status) VALUES ("Renta!", "葬送のフリーレン", 11, "続");
INSERT INTO comics (comic_service_name, comic_title, volumes, status) VALUES ("Kindle", "ダンジョン飯", 14, "完結");
