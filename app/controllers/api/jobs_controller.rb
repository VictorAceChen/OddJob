class Api::JobsController < ApplicationController
	before_action :require_signed_in!, only: [:create, :destroy]

	def index
		search_str = params[:search_str]

		@jobs = Job.where("title ILIKE :str
		OR location ILIKE :str
		OR description ILIKE :str",
	  {str: "%#{search_str}%"}).reverse
		# @jobs = Job.all.reverse
	end

	def show
		@job = Job.find(params[:id])
	end

	def create
    @job = current_user.job_posts.new(job_params)
    if @job.save
      render json: @job
      # render :show
    else
      render json: @job.errors.full_messages, status: 422
    end
	end

  def update
    @job = Job.find(params[:id])
    if @job.update(job_params)
      render :show
    else
      render json: @job.errors.full_messages, status: 422
    end
  end

  def destroy

    @job = Job.find(params[:id])

    if @job.destroy
      render :show
    else
      render json: @job.errors.full_messages, status: 422
    end
  end

  def job_params
    params.require(:job).permit(
    :title,
    :jobtype,
    :salary,
    :description,
    :location)
  end

end
