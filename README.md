# OddJob

[OddJob live][oddjob]

[oddjob]: http://oddjobappacademy.herokuapp.com

OddJob is a full-stack web application, based on Indeed, for searching and posting jobs. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

###Introduction:

![Introduction](./docs/FrontPage.png)

###Search:

![Search](./docs/SearchPage.png)

OddJob is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#get_user`.

```ruby

class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
			login(@user)
			render "api/users/show"
		else
			render(
        json: {
          base: ["Incorrect password or email address"]
        },
        status: 401
      )
		end
	end
end
```

### Job rendering and editing

  The jobs are stored in one table in the database, which contains columns for `id`, `employer_id`, `description`, 'location' and `salary`.  Upon searching, an API call is made to the database and jobs are filtered by the search parameter.  These jobs are held in the `JobStore` until the user's session is destroyed. When visiting each job individually, checks will be made if the current user was the publisher. This will either allow access to editing/deleting the post or adding the job post to the users watch list under "my job".

###Features
* Sign up/in or sign in with facebook
* create/edit job posting
* add/remove other users' job postings to your "my jobs" watchlist.

###Languages
* JavaScript
* Ruby
* SQL
* HTML
* CSS

###Frameworks

* React.js
* Rails

###Libraries and Technologies

* BCrypt
* Flux
* jQuery
* Paperclip
* PgSearch
* PostgreSQL
* Facebook-OmniAuth
* React Router
* Webpack

###To-Do:
* [ ] Refine search parameters
* [ ] Edit MyJobs by status
* [ ] Pagination / infinite scroll for Jobs/Myjobs Index
* [ ] Sort by group (i.e. location, salary, job type)

[Original Design Docs](./docs/README.md)
