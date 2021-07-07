class AddViewsToPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :views, :integer, :default => 0
    change_column_default :photos, :private, true
  end
end
