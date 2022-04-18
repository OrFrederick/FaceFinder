class Api::DetectionsController < ApplicationController
    def index
        detections = Detection.all
        render json: detections
    end

    def create
        detection = Detection.new(detection_params)
        if detection.save
            render json: detection
        else
            render json: {error: 'Unable to create Detection', params: detection_params, det: detection}, status: 400
        end
    end

    private
    
    def detection_params
        params.permit(:timestamp, :datetime, :top, :bottom, :left, :right, :video_id, :person_id)
    end
end
