class Detection < ApplicationRecord
  belongs_to :video
  belongs_to :person
end
