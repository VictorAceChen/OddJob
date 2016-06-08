class MyJob < ActiveRecord::Base
  validates :job_id, :user_id, presence: true
  
  belongs_to :user
  belongs_to :job
end
