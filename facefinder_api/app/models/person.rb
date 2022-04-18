class Person < ApplicationRecord
    has_many :detections
    has_many :face_encodings
end
