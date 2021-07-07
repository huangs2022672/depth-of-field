class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description
      t.boolean :private, null: false
      t.integer :uploader_id, null: false

      t.timestamps
    end
    add_index :photos, :title
    add_index :photos, :uploader_id
  end
end
