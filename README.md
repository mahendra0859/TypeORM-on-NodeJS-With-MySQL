# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

# TypeORM on Node.js with MySQL

[Click here for video tutorial](https://www.youtube.com/watch?v=Reb7ISQZCvA)

[Click here for TypeORM documentation](https://typeorm.io/#/)

#### Methods and commands

- Install typeorm globally
  \$ sudo npm i typeorm -g

- Initialsize project using typeorm cli
  \$ typeorm init --name typeorm-on-nodejs-with-mysql --database mysql

- To enter mysql shell
  \$ mysql -u root -p

- To create Database in mysql shell
  mysql> create database social_network;

- To check databases in mysql shell
  mysql> show databases;

- To use particular database
  mysql> use social_network;

* To show table in Databases
  mysql> show tables;

- To show schema of table in Databases
  mysql> describe tweets;

- To show data of table in Databases
  mysql> select from users;

- To drop table in Databases
  mysql> drop table users;

- To create migration using typworm cli
  \$ typeorm migration:create -n add-role-column-to-users

- To run migration using typworm cli
  \$ typeorm migration:run

- Note: Install typescript and ts-node globally using npm because migration run won't work for typescript we need to conver typescript to javascript
  \$ npm i typescript ts-node -g

- use the following code to do migration
  \$ ts-node ./node_modules/.bin/typeorm migration:run

- To remove last migration
  \$ ts-node ./node_modules/.bin/typeorm migration:revert

- To open migration manual
  \$ ts-node ./node_modules/.bin/typeorm migration --man
