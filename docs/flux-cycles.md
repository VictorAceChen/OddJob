# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Job Cycles

### Jobs API Request Actions

* `fetchAllJobs`
  0. invoked from `JobsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/jobs` is called.
  0. `receiveAllJobs` is set as the callback.

* `createJob`
  0. invoked from new job button `onClick`
  0. `POST /api/jobs` is called.
  0. `receiveSingleJob` is set as the callback.

* `fetchSingleJob`
  0. invoked from `JobDetail` `didMount`/`willReceiveProps`
  0. `GET /api/jobs/:id` is called.
  0. `receiveSingleJob` is set as the callback.

* `updateJob`
  0. invoked from `JobForm` `onSubmit`
  0. `POST /api/jobs` is called.
  0. `receiveSingleJob` is set as the callback.

* `destroyJob`
  0. invoked from delete job button `onClick`
  0. `DELETE /api/jobs/:id` is called.
  0. `removeJob` is set as the callback.

### Jobs API Response Actions

* `receiveAllJobs`
  0. invoked from an API callback.
  0. `Job` store updates `_jobs` and emits change.

* `receiveSingleJob`
  0. invoked from an API callback.
  0. `Job` store updates `_jobs[id]` and emits change.

* `removeJob`
  0. invoked from an API callback.
  0. `Job` store removes `_jobs[id]` and emits change.

### Store Listeners

* `JobsIndex` component listens to `Job` store.
* `JobDetail` component listens to `Job` store.


## JobType Cycles

### JobTypes API Request Actions

* `fetchAllJobTypes`
  0. invoked from `JobTypesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/jobTypes` is called.
  0. `receiveAllJobTypes` is set as the callback.

* `createJobType`
  0. invoked from new jobType button `onClick`
  0. `POST /api/jobTypes` is called.
  0. `receiveSingleJobType` is set as the callback.

* `fetchSingleJobType`
  0. invoked from `JobTypeDetail` `didMount`/`willReceiveProps`
  0. `GET /api/jobTypes/:id` is called.
  0. `receiveSingleJobType` is set as the callback.

* `updateJobType`
  0. invoked from `JobTypeForm` `onSubmit`
  0. `POST /api/jobTypes` is called.
  0. `receiveSingleJobType` is set as the callback.

* `destroyJobType`
  0. invoked from delete jobType button `onClick`
  0. `DELETE /api/jobTypes/:id` is called.
  0. `removeJobType` is set as the callback.

### JobTypes API Response Actions

* `receiveAllJobTypes`
  0. invoked from an API callback.
  0. `JobType` store updates `_jobTypes` and emits change.

* `receiveSingleJobType`
  0. invoked from an API callback.
  0. `JobType` store updates `_jobTypes[id]` and emits change.

* `removeJobType`
  0. invoked from an API callback.
  0. `JobType` store removes `_jobTypes[id]` and emits change.

### Store Listeners

* `JobTypesIndex` component listens to `JobType` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `JobSearchBar` `onChange` when there is text
  0. `GET /api/jobs` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `JobSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
