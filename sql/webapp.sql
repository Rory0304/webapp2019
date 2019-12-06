CREATE TABLE team
(
  teamNum integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20),
  githup VARCHAR(50)
);

INSERT INTO team VALUES (null,"수조",null);

CREATE TABLE students (
  id VARCHAR(20) PRIMARY KEY,
  class integer,
  teamNum integer,

  html VARCHAR(1) DEFAULT 0,
  css VARCHAR(1) DEFAULT 0,
  js VARCHAR(1) DEFAULT 0,
  jquery VARCHAR(1) DEFAULT 0,
  php VARCHAR(1) DEFAULT 0,

  db VARCHAR(1) DEFAULT 0,
  ajax VARCHAR(1) DEFAULT 0,
  xml VARCHAR(1) DEFAULT 0,
  c VARCHAR(1) DEFAULT 0,
  cplusplus VARCHAR(1) DEFAULT 0,

  java VARCHAR(1) DEFAULT 0,
  python VARCHAR(1) DEFAULT 0,
  ruby VARCHAR(1) DEFAULT 0,
  Django VARCHAR(1) DEFAULT 0,
  Perl VARCHAR(1) DEFAULT 0,

  etc VARCHAR(20)
);

INSERT INTO students VALUES ('id1',23497,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null);
INSERT INTO students VALUES ('id2',23497,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,"flask");
INSERT INTO students VALUES ('id3',23497,null,0,1,1,1,0,0,0,0,0,null,0,0,0,0,0,null);

CREATE TABLE message (
  sender VARCHAR(20),
  receiver VARCHAR(20),
  sendDay date
);

INSERT INTO message VALUES ('id2','id1','2019-12-06');

drop table team;
drop table students;
