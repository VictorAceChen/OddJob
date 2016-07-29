class Api::JobsController < ApplicationController
	before_action :require_signed_in!, only: [:create, :destroy]

	def index
		# uri    = URI.parse(url)
		# params = CGI.parse(uri.query)
		# @jobs = Job.all.reverse
		search = params[:search_str]
		@query = <<-SQL.strip_heredoc
					title LIKE %#{search}%
					OR location LIKE %#{search}%
					OR description LIKE %#{search}%
				SQL

		@jobs = Job.where("title LIKE :str
		OR location LIKE :str
		OR description LIKE :str",
	  {str: params[:search_str]}).reverse

		@jobs = Job.all.reverse
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
