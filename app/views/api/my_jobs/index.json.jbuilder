# json.partial! 'my_job', collection: @my_jobs, as: :my_job

json.array!(@my_jobs) do |my_job|
  json.id my_job.id
  json.title my_job.title
  json.jobtype my_job.jobtype
  json.salary my_job.salary
  json.description my_job.description
  json.location my_job.location
  json.summary my_job.summary
  json.logo_url my_job.logo_url
end
