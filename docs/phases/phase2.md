# Phase 2: Flux Architecture and Job CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* JobsIndex
  - JobsIndexItem
* JobForm

### Stores
* Job

### Actions
* ApiActions.receiveAllJobs -> triggered by ApiUtil
* ApiActions.receiveSingleJob
* ApiActions.deleteJob
* JobActions.fetchAllJobs -> triggers ApiUtil
* JobActions.fetchSingleJob 
* JobActions.createJob
* JobActions.editJob 
* JobActions.destroyJob

### ApiUtil
* ApiUtil.fetchAllJobs
* ApiUtil.fetchSingleJob
* ApiUtil.createJob
* ApiUtil.editJob
* ApiUtil.destroyJob

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
