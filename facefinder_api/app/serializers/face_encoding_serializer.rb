class FaceEncodingSerializer < ActiveModel::Serializer
  attributes :id, :encoding
  belongs_to :person
end
