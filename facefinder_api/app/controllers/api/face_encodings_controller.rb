class Api::FaceEncodingsController < ApplicationController
    def index
        face_encodings = FaceEncoding.all
        render json: face_encodings
    end

    def create
        face_encoding = FaceEncoding.new(face_encoding_params)
        if face_encoding.save
            render json: face_encoding
        else
            render json: {error: 'Unable to create face_encoding'}, status: 400
        end
    end

    private

    def face_encoding_params
        params.permit(:person_id, :encoding)
    end
end
