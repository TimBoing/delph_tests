# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Starting seed"

u = User.new
u.email = "tim@tim.com"
u.password = "timtim"
u.save!

p = Pet.new
p.user = u
p.pet_type = "Cat"
p.name = Faker::Creature::Cat.name
p.breed = Faker::Creature::Cat.breed
p.gender = Faker::Creature::Dog.gender
p.birth_date = Faker::Date.birthday(min_age: 1, max_age: 130)
p.save!


i = 0
1000.times do
  i += 1
  s = Stat.new
  s.pet = p
  s.category = "Heart"
  s.value = rand * 30 + 110
  s.time = Time.now - (60 * 60 * i)
  s.save!
end

puts "Seed completed"

