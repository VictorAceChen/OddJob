class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

end
