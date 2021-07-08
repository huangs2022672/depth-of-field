class RemoveNullFalsePhotoPrivate < ActiveRecord::Migration[5.2]
  def change
    change_column :photos, :private, :boolean, :null => true
  end
end
