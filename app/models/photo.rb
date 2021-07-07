class Photo < ApplicationRecord

  validates :title, presence: true, uniqueness: { scope: :uploader_id}
  validates :private, presence: true, inclusion: { in: [true, false]}
  validates :uploader_id, presence: true

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User

# Active Storage Association
  has_one_attached :file
    
end
