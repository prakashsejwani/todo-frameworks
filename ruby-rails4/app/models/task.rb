class Task < ActiveRecord::Base

  validates :name, presence: true

  belongs_to :project, counter_cache: true
end
