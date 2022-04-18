class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :color
  has_many :detections
  has_many :face_encodings
end
