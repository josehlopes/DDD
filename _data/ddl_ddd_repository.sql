CREATE DATABASE IF NOT EXISTS ddd_repository;
USE ddd_repository;

CREATE TABLE IF NOT EXISTS all_ddd (
    idDDD INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ddd INT(2) NOT NULL,
    destination VARCHAR(100) NOT NULL
    );
