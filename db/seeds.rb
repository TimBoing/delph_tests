# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Starting seed"

puts("creating fake user")

u = User.new
u.username = "Tim"
u.email = "tim@tim.com"
u.password = "timtim"
u.save!

puts("creating 3 fake pets")

3.times do
  p = Pet.new
  p.user = u
  p.pet_type = "Cat"
  p.name = Faker::Creature::Cat.name
  p.breed = Faker::Creature::Cat.breed
  p.gender = Faker::Creature::Dog.gender
  p.birth_date = Faker::Date.birthday(min_age: 1, max_age: 130)
  p.save!

  # i = 0
  # 1000.times do
  #   i += 1
  #   s = Stat.new
  #   s.pet = p
  #   s.category = "Heart"
  #   s.value = rand * 30 + 110
  #   s.time = Time.now - (60 * 60 * i)
  #   s.save!
  # end
end

puts('Adding stats for emotions on pet #1')

p = Pet.first

s = Stat.new
s.pet = p
s.category = "Emotions"
s.sub_category = "Happy"
s.value = 50
s.save!

s = Stat.new
s.pet = p
s.category = "Emotions"
s.sub_category = "Stress"
s.value = 20
s.save!

s = Stat.new
s.pet = p
s.category = "Emotions"
s.sub_category = "Fear"
s.value = 20
s.save!

s = Stat.new
s.pet = p
s.category = "Emotions"
s.sub_category = "Plotting"
s.value = 10
s.save!

puts('Adding 30 random stats for activity per day on pet #1')

i = 0
30.times do
  i += 1
  s = Stat.new
  s.pet = p
  s.category = "Activity"
  s.value = rand * 10000 + 100
  s.time = Time.now - (60 * 60 * 24 * i)
  s.save!
end

puts('Adding 30 random stats for sleeping hours per day on pet #1')
i = 0
30.times do
  i += 1
  s = Stat.new
  s.pet = p
  s.category = "Sleeping"
  s.value = rand * 7 + 3
  s.time = Time.now - (60 * 60 * 24 * i)
  s.save!
end


puts "Seed completed"

