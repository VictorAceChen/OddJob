class Api::MyJobsController < ApplicationController
  def index
    @my_jobs = current_user.jobs
  end

  def create
    # @my_job = MyJob.new(my_job_params)
    # @my_job.user_id = current_user.id
    @my_job = current_user.my_jobs.new(my_job_params)
    if @my_job.save
      render :show
    else
      render json: @my_job.errors.full_messages, status: 422
    end
  end

  def show
    @my_job = MyJob.find(params[:id])
  end

  def update
    @my_job = MyJob.find(params[:id])
    @my_job.update(status: my_job_params[:status])
    render :show
  end

  def destroy
    @my_job = current_user.my_jobs.find_by(job_id: params[:job_id])
    @my_job.destroy
    render :show
  end

  def my_job_params
    params.require(:my_job).permit(:job_id, :status)
  end
end
