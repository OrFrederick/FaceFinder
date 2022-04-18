class DetectionSerializer < ActiveModel::Serializer
  attributes :id, :timestamp, :datetime, :video_id, :person_id #, :top, :bottom, :left, :right
  has_one :video
  has_one :person
end
