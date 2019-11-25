use ParkShark;

drop table user_statistics;
drop table users;

create table users(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(64),
	last_name varchar(64),
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

create table user_statistics(
	id int NOT NULL AUTO_INCREMENT,
	c02_saved int DEFAULT 0,
	money_made int DEFAULT 0,
	unique_sales int DEFAULT 0,
	purchases int DEFAULT 0,
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
);

# Adding users and default statistics
insert into users (first_name, last_name) values ('Marcus', 'Nystad');
insert into user_statistics values (1, 1000, 5000, 10, 15);
insert into users (first_name, last_name) values ('Daniel', 'Strallhofer');
insert into user_statistics () values ();
