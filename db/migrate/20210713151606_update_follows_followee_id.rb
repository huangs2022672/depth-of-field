class UpdateFollowsFolloweeId < ActiveRecord::Migration[5.2]
  def change
    remove_index :follows, :followee_id
    add_index :follows, :followee_id
  end
end
