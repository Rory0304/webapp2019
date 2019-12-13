CREATE TABLE member
(
    studentNum VARCHAR(20) NOT NULL PRIMARY KEY,
    class integer,
    teamname VARCHAR(20),
    name VARCHAR(20)
);

CREATE TABLE team
(
    name VARCHAR(20) NOT NULL PRIMARY KEY,
    class integer,
    githup VARCHAR(50),
    UNIQUE KEY 
);

CREATE TABLE lang (
    studentNum VARCHAR(20) NOT NULL PRIMARY KEY,

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

CREATE TABLE message (
    sender VARCHAR(20),
    receiver VARCHAR(20),
    sendDay date
);


ALTER TABLE member CONVERT TO character SET utf8;
ALTER TABLE team CONVERT TO character SET utf8;
ALTER TABLE lang CONVERT TO character SET utf8;
ALTER TABLE message CONVERT TO character SET utf8;
