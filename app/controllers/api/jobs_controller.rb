class Api::JobsController < ApplicationController
	before_action :require_signed_in!, only: [:create]
	def index
		@jobs = Job.all
    render :index
	end

	def show
		@job = Job.find(params[:id])
	end

	def create
		city = params.require(:job)[:location]
		location = Location.find_or_create_by(city: city)

		@job = location.jobs.new(job_params)
		@job.employer_id = current_user.id
    if @job.save
      render :show
    else
      render json: {message: @job.errors.full_messages }, status: 401
    end
	end

  def job_params
    params.require(:job).permit(:title, :jobtype, :salary, :description, :location)
  end
end
