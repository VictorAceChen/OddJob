class ColFacebook < ActiveRecord::Migration
  def change
  change_column :users, :username, :string, :null => true
  add_column(:users, :facebook_uid, :string)
  end
end
