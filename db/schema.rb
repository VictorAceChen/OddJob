# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160608225848) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jobs", force: :cascade do |t|
    t.integer  "employer_id",                       null: false
    t.string   "title",                             null: false
    t.string   "description",                       null: false
    t.string   "jobtype",     default: "Part-Time"
    t.string   "location",                          null: false
    t.integer  "salary"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  add_index "jobs", ["employer_id"], name: "index_jobs_on_employer_id", using: :btree
  add_index "jobs", ["jobtype"], name: "index_jobs_on_jobtype", using: :btree
  add_index "jobs", ["location"], name: "index_jobs_on_location", using: :btree
  add_index "jobs", ["salary"], name: "index_jobs_on_salary", using: :btree
  add_index "jobs", ["title"], name: "index_jobs_on_title", using: :btree

  create_table "my_jobs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "job_id",  null: false
    t.string  "status",  null: false
  end

  add_index "my_jobs", ["job_id"], name: "index_my_jobs_on_job_id", using: :btree
  add_index "my_jobs", ["user_id"], name: "index_my_jobs_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                                               null: false
    t.string   "company_name"
    t.string   "password_digest"
    t.string   "session_token",                                                                                                                          null: false
    t.datetime "created_at",                                                                                                                             null: false
    t.datetime "updated_at",                                                                                                                             null: false
    t.string   "logo_url",        default: "http://www.villagehatshop.com/photos/product/standard/2393460S1799/derby-bowler-hats/harker-bowler-hat.jpg"
    t.string   "twitter_id"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
