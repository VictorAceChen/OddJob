class Job < ActiveRecord::Base
  validates :title, :description, :employer_id, :location, presence: true
  validates :salary, numericality: true, allow_nil: true

	belongs_to(
		:employer,
		class_name: "User",
		primary_key: :id,
		foreign_key: :employer_id
	)

  def summary
  if description.length <= 100
    return description
  else
    return description.slice(0, 100) + "..."
  end
end
end
