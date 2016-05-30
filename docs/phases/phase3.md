# Phase 3: JobTypes and Tags (2 days)

## Rails
### Models
* JobType
* Tag
* Tagging

### Controllers
* Api::JobTypesController (create, destroy, index, show, update)

### Views
* jobTypes/index.json.jbuilder
* jobTypes/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* JobTypesIndex
  - JobTypeIndexItem
* JobTypeForm
* SearchIndex

### Stores
* JobType

### Actions
* ApiActions.receiveAllJobTypes -> triggered by ApiUtil
* ApiActions.receiveSingleJobType
* ApiActions.deleteJobType
* JobTypeActions.fetchAllJobTypes -> triggers ApiUtil
* JobTypeActions.fetchSingleJobType
* JobTypeActions.createJobType
* JobTypeActions.editJobType
* JobTypeActions.destroyJobType

### ApiUtil
* ApiUtil.fetchAllJobTypes
* ApiUtil.fetchSingleJobType
* ApiUtil.createJobType
* ApiUtil.editJobType
* ApiUtil.destroyJobType

## Gems/Libraries
