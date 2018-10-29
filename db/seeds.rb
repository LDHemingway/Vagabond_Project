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
san_francisco = City.create(location: "San Francisco", picture_url: "https://images.unsplash.com/photo-1495755021184-210b522ccb23?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f935e3e49567f6f26f345895d6343ed&auto=format&fit=crop&w=1500&q=80")
london = City.create(location: "London", picture_url: "https://images.unsplash.com/photo-1508710985089-e985fabbb184?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0da2d988270049fdd306a9d11c4e2aad&auto=format&fit=crop&w=2000&q=80")

bob = User.create(name: "Bob", current_city: "Atlanta")
steve = User.create(name: "Steve", current_city: "Seattle")
randy = User.create(name: "Randy", current_city: "New York")

cnn_post = Post.create(user_id: bob.id, city_id: atlanta.id, title: "CNN", comment: "This place dope.")
goldengate = Post.create(user_id: steve.id, city_id: san_francisco.id, title: "Golden Gate Brdige", comment: "It's a bridge. It's red. It's very red.")
big_ben = Post.create(user_id: randy.id, city_id: london.id, title: "Big Ben", comment: "It's just a clock. Disappointed. Thought I was gonna meet the football player." )
