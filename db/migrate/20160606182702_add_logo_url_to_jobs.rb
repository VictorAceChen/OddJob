class AddLogoUrlToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :logo_url, :string
  end
end
