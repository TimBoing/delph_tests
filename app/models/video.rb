class Video < ApplicationRecord
  has_one_attached :clip
  # has_one_attached :thumbnail
  belongs_to :pet
end

