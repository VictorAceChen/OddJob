# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Jobs

- `GET /api/jobs`
  - Jobs index/search
  - accepts `tag_name` query param to list jobs by tag
  - accepts pagination params (if I get there)
- `POST /api/jobs`
- `GET /api/jobs/:id`
- `PATCH /api/jobs/:id`
- `DELETE /api/jobs/:id`

### JobTypes

- `GET /api/jobTypes`
- `POST /api/jobTypes`
- `GET /api/jobTypes/:id`
- `PATCH /api/jobTypes/:id`
- `DELETE /api/jobTypes/:id`
- `GET /api/jobTypes/:id/jobs`
  - index of all jobs for a jobType
  - accepts pagination params (if I get there)

### Tags

- A job's tags will be included in the job show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/jobs/:job_id/tags`: add tag to job by name
  - if job doesn't already exist, it will be created
- `DELETE /api/jobs/:job_id/tags/:tag_name`: remove tag from job by
  name
