class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :commenter_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
    add_index :comments, :commenter_id
    add_index :comments, :photo_id
  end
end
