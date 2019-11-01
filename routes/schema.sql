DROP DATABASE IF EXISTS calendarDB;
CREATE DATABASE calendarDB;

USE calendarDB;

CREATE TABLE `event`(
    `event_id` INTEGER AUTO_INCREMENT NOT NULL,
    `moment` VARCHAR(13),
    `event` VARCHAR(30) NOT NULL,
    `year` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `day` INTEGER NOT NULL,
    `finished` BOOLEAN NOT NULL DEFAULT 0,
    `important` BOOLEAN NOT NULL DEFAULT 0,
    `createdAt` INTEGER NOT NULL,
    `updatedAt` INTEGER NOT NULL,
    PRIMARY KEY(event_id)
);

INSERT INTO `events`(`event`,`year`,`month`, `day`,`finished`,`imortant`, `createdAt`, `updatedAt`) 
VALUES("Independence Day", 2019, 07, 04,false, false, 20150414, 20150414), ("Division/Clinton Street Fair", 2019, 07, 27,false, false, 20150414, 20150414),("Adult Party at Omsi", 2019, 07, 31,false, false, 20150414, 20150414),("Cold Coffe Festival", 2019, 08, 03,false, false, 20150414, 20150414),
("Alberta Street Fair", 2019, 08, 10,false, false, 20150414, 20150414), ("Bike Or Walk The Bridges", 2019, 08, 23,false, false, 20150414, 20150414), ("Bike Or Walk The Bridges", 2019, 08, 24,false, false, 20150414, 20150414), ("Bike Or Walk The Bridges", 2019, 08, 25,false, false, 20150414, 20150414),
("Camera Show", 2019, 08, 24,false, false, 20150414, 20150414), ("Air and vehicle show", 2019, 08, 17,false, false, 20150414, 20150414), ("Brunchy booze festival", 2019, 08, 10,false, false, 20150414, 20150414), ("Hawaiian festival", 2019, 07, 27,false, false, 20150414, 20150414), ("Hawaiian festival", 2019, 07 ,28,false, false, 20150414, 20150414)


CREATE TABLE user_info(
    `user_id` INTEGER AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(30) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `password` VARCHAR NOT NULL,
    PRIMARY KEY(user_id)
);