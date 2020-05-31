class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  attr_writer :login

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :pets, dependent: :destroy
  validates :username, presence: true, uniqueness: true
  has_one_attached :photo, dependent: :destroy

  def login
    @login || self.username || self.email
  end
end


