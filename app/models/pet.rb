class Pet < ApplicationRecord
  has_many :stats, dependent: :destroy
  has_many :videos, dependent: :destroy
  belongs_to :user
  has_one_attached :photo
end


