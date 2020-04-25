class Pet < ApplicationRecord
  has_many :stats
  belongs_to :user
  has_one_attached :photo
end
