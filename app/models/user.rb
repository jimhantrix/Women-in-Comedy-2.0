class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :posts
  has_many :events
  has_many :comments

  has_many :connection_requests, :foreign_key => :receiver
  has_many :users, :through => :connection_requests, :source => :sender
end