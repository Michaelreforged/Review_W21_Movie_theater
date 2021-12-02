# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Theater.destroy_all

theater1 = Theater.create(name: "Cinemark", loc:"Main St.")
theater2 = Theater.create(name: "Century 16", loc:"State St.")
theater3 = Theater.create(name: "Dollar Theater", loc:"Somewhere")

spiderman1 = theater1.movies.create(name:"Spider-man 1", duration:" 2 hours")
spiderman2 = theater2.movies.create(name:"Spider-man 2", duration:" 1 hour 30 mins")
spiderman3 = theater3.movies.create(name:"Spider-man 3", duration:" 1 hours 45 mins")

spiderman4 = Movie.create(name:"The Amazing Spider-Man", duration:"3 hours", theater_id: Theater.first.id)