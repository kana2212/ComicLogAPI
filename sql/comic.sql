DROP TABLE IF EXISTS comics;

CREATE TABLE comics (
  id int unsigned AUTO_INCREMENT,
  comic_service_name VARCHAR(100) Not Null,
  comic_title VARCHAR(100) Not Null,
  volumes int unsigned Not Null,
  PRIMARY KEY(id)
);
INSERT INTO comics (id, comic_service_name, comic_title, volumes) VALUES (1, "コミックシーモア", "鬼滅の刃", 22);
INSERT INTO comics (id, comic_service_name, comic_title, volumes) VALUES (2, "Renta!", "葬送のフリーレン", 11);
INSERT INTO comics (id, comic_service_name, comic_title, volumes) VALUES (3, "Kindle", "ダンジョン飯", 12);
