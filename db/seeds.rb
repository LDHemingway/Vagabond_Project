# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.destroy_all
User.destroy_all

atlanta = City.create(location: "Atlanta", picture_url: "https://www.wheretraveler.com/sites/default/files/styles/promoted_image_social_large/public/skyline-atlanta_c-davidkosmossmith-flickr.jpg?itok=uMQTObyt" )

bob = User.create(name: "Bob", current_city: "Atlanta")

samplepost = Post.create(user_id: bob.id, city_id: atlanta.id, title: "CNN", comment: "This place dope.")