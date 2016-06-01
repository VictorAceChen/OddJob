class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|

      t.integer :employer_id, null: false
      t.string :title, null: false
			t.string :description, null: false
			t.string :jobtype, default: "Part-Time"
			t.string :location, null: false
			t.integer :salary

      t.timestamps null: false
    end

    add_index :jobs, :title
		add_index :jobs, :jobtype
		add_index :jobs, :salary
		add_index :jobs, :location
		add_index :jobs, :employer_id

  end
end
