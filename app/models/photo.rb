# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  private     :boolean          default(TRUE)
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  views       :integer          default(0)
#
class Photo < ApplicationRecord

  validates :title, presence: true, uniqueness: { scope: :uploader_id}
  validates :private, inclusion: { in: [true, false]}
  validates :uploader_id, presence: true

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment

  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

# Active Storage Association
  has_one_attached :file



end
