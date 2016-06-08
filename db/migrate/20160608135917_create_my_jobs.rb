class CreateMyJobs < ActiveRecord::Migration
  def change
    create_table :my_jobs do |t|
      t.integer :user_id, null: false
      t.integer :job_id, null: false
      t.string :status, null: false
    end
    add_index :my_jobs, :user_id
    add_index :my_jobs, :job_id
  end
end
