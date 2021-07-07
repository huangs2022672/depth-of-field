class User < ApplicationRecord
  
  validates :first_name, :last_name, presence: true, length: { in: 2..20, message: "must be at least 2 characters." }
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 13, message: ": you must be 13 or older to sign up." }
  validates :email, presence: true, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, message: "is not valid."}
  validates :password, length: { minimum: 6, message: "must be at least 6 characters."}, allow_nil: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true

  has_many :photos,
    foreign_key: :uploader_id,
    class_name: :Photo

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.generate_session_token
    self.save!
    self.session_token
  end

end
