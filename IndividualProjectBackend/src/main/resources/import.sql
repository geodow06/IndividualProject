Insert INTO User (user_id, Username, Password) values (1, 'geodow06', 'password1') 
Insert INTO User (user_id, Username, Password) values (2, 'geohai06', 'password2')
Insert INTO User (user_id, Username, Password) values (3, 'matgad06', 'password3') 

Insert INTO ALgorithm (alg_id, Name, Moves, Scramble, user_id) VALUES (1, 'J2', 'R','R',1)
Insert INTO Algorithm (alg_id, Name, Moves, Scramble, user_id) VALUES (2, 'T', 'F', 'F',2)
Insert INTO Algorithm (alg_id, Name, Moves, Scramble, user_id) VALUES (3, 'H', 'M2 U M2 U2 M2 U M2', 'D',1) 

Insert INTO TimeLog (time_id, Times, alg_id) values (1, '20', 1) 
Insert INTO TimeLog (time_id, Times, alg_id) values (2, '21', 2)
Insert INTO TimeLog (time_id, Times, alg_id) values (3, '22', 1)
Insert INTO TimeLog (time_id, Times, alg_id) values (4, '23', 2)
Insert INTO TimeLog (time_id, Times, alg_id) values (5, '24', 3)
Insert INTO TimeLog (time_id, Times, alg_id) values (6, '25', 3)
