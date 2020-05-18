class Pet < ApplicationRecord
  has_many :stats
  has_many :videos
  belongs_to :user
  has_one_attached :photo
end

