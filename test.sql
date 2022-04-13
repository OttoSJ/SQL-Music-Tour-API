sequelize model:generate --name Meet_Greet --attributes "meet_greet_id:integer,  event_id:smallint, band_id:smallint, meet_start_time:date, meet_end_time:date" --force true

INSERT INTO bands (
name, genre, available_start_time, end_time, recommendation  ) VALUES (
 'John Mayer',
 'Pop, Rock, Blues',
 '2022-03-05',
'2022-03-05',
 'Neon');
 

 postman

 {
     "name": "Staind",
     "genre": "Metal", 
     "available_start_time": "2022-01-01T19:00:00",
     "end_time": "2022-01-01T20:30:00"
 }

 {
     "stage_id": "Blues",
     "stage_name": "Blues",
      "available_start_time": "2022-01-01T19:00:00",
     "end_time": "2022-01-01T20:30:00"
 }


{
  "name": "Maryland", 
}