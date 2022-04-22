class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :recording_start, :recording_end
  has_many :detections

end
