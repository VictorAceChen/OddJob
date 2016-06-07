class SwapLogoColumn < ActiveRecord::Migration
  def change
    add_column :users, :logo_url, :string, :default => "http://www.villagehatshop.com/photos/product/standard/2393460S1799/derby-bowler-hats/harker-bowler-hat.jpg"
    remove_column :jobs, :logo_url, :string
  end
end
