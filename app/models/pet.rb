class Pet < ApplicationRecord
  has_many :stats
  belongs_to :user
end
