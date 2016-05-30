# OddJob

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product
OddJob is a web application inspired by Indeed that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for Indeed-inspired site: job creation and saving, job editing, and jobs organized into jobTypes
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities
OddJob will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete jobs (MVP)
- [ ] Organizejobss within JobTypes (MVP)
- [ ] Tagjobss with multiple tags (expected feature, but not MVP)
- [ ] Apply complex styling tjobses while editing (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Jobs Model, API, and basic APIUtil (1.5 days)

**Objective:**Jobs can be created, read, edited and destroyed through
the API.

- [ ] create Job model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for jobs (JobsController`)
- [ ] jBuilder views jobs
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:Job can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each job component, building out the flux loop as needed.
  - [ ] 'JobsIndex`
  - [ ] `JobIndexItem`
  - [ ] `JobForm`

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: JobTypes (1 day)

**Objective:** Jobs belong Companies, and can be viewed by JobType. (and maybe type)

- [ ] create JobType model
- build out API, Flux loop, and components for:
  - [] JobType CRUD
  - [ ] adding jobs requires a jobType
  - [ ] viewing jobs by jobType
  - [ ] viewing jobs by jobType
- Use CSS to style new views

Phase 3 adds organization to the Jobs. Jobs belong to a JobType,
which has its own `Index` view.

### Phase 6: Tags (1 day)

**ObjecJob:** Jobs can be tagged with multiple tags, and tags are searchable.(skill set)

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for job listing
  - [ ] adding tags to job listing
  - [ ] creating tags while adding job listing
  - [ ] search job listing by tag
- [ ] Style new elements

### Phase 7: Watchlist (1 day)

**objective:** Users can add job to watchlist.

- [ ] create Watchlist model
- build out API, Flux loop, and components for:
  - [ ] add/remove jobs from watchlist
  - [ ] update watchlist item status

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Searchjobsughjobes for blocks of text
- [ ] Pagination / infinite sJobl for Jobs Index
- [ ] Set remjobss onjobes
- [ ] ChanJobgs for Jobs
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
