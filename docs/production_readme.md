# OddJob

[OddJob live][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

OddJob is a full-stack web application inspired by Indeed.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

 **NB**: don't copy and paste any of this.  Many folks will implement similar features, and many employers will see the READMEs of a lot of a/A grads.  You must write in a way that distinguishes your README from that of other students', but use this as a guide for what topics to cover.  

### Single-Page App

OddJob is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#get_user`.

```ruby
class Api::SessionsController < ApplicationController
    def get_user
      if current_user
        render :current_user
      else
        render json: errors.full_messages
      end
    end
 end
  ```

### Job Rendering and Editing

  On the database side, the jobs are stored in one table in the database, which contains columns for `id`, `user_id`, `content`, and `updated_at`.  Upon login, an API call is made to the database which joins the user table and the job table on `user_id` and filters by the current user's `id`.  These jobs are held in the `JobStore` until the user's session is destroyed.  

  Jobs are rendered in two different components: the `CondensedJob` components, which show the title and first few words of the job content, and the `ExpandedJob` components, which are editable and show all job text.  The `JobIndex` renders all of the `CondensedJob`s as subcomponents, as well as one `ExpandedJob` component, which renders based on `JobStore.selectedJob()`. The UI of the `JobIndex` is taken directly from Indeed for a professional, clean look:  

![image of jobType index](https://github.com/appacademy/sample-project-proposal/blob/master/docs/jobIndex.png)

Job editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

### JobTypes

Implementing JobTypes started with a jobType table in the database.  The `JobType` table contains two columns: `title` and `id`.  Additionally, a `jobType_id` column was added to the `Job` table.  

The React component structure for jobTypes mirrored that of jobs: the `JobTypeIndex` component renders a list of `CondensedJobType`s as subcomponents, along with one `ExpandedJobType`, kept track of by `JobTypeStore.selectedJobType()`.  

`JobTypeIndex` render method:

```javascript
render: function () {
  return ({this.state.jobTypes.map(function (jobType) {
    return <CondensedJobType jobType={jobType} />
  }
  <ExpandedJobType jobType={this.state.selectedJobType} />)
}
```

### Tags

As with jobTypes, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_jobs` table is the associated join table, which contains three columns: `id`, `tag_id`, and `job_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying jobs can potentially affect `Tag` objects, the `JobIndex` and the `JobTypeIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Job` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for OddJob are outlined below.

### Search

Searching jobs is a standard feature of Indeed.  I plan to utilize the Fuse.js library to create a fuzzy search of jobs and jobTypes.  This search will look go through tags, job titles, jobType titles, and job content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between OddJob users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
