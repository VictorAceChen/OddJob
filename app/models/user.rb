class User < ActiveRecord::Base

	attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness


	  # has_attached_file :image, default_url: "http://www.villagehatshop.com/photos/product/standard/2393460S1799/derby-bowler-hats/harker-bowler-hat.jpg"
  has_attached_file :image, default_url: :logo_url
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many(
    :job_posts,
    class_name: "Job",
    foreign_key: :employer_id,
    primary_key: :id
  )

  has_many(
    :my_jobs,
    class_name: "MyJob",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :jobs,
    through: :my_jobs
  )
  # user.jobs.where(status: "Applying")

  def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

  def self.find_or_create_with_auth_hash(auth_hash)
  user = User.find_by(facebook_uid: auth_hash[:uid])
  if user.nil?
    user = User.create!(
      facebook_uid: auth_hash[:uid],
      username: auth_hash[:info][:name],
      password: SecureRandom::urlsafe_base64 #to pass password restriction
    )
  end
  user
end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end
end
