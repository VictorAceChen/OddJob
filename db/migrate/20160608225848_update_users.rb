class UpdateUsers < ActiveRecord::Migration
  def change
    add_column :users, :twitter_id, :string
    change_column :users, :password_digest, :string, :null => true
  end
end
