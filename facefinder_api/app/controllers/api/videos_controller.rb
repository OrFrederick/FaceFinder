class Api::VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos
    end

    def show
        video = Video.find(params[:id])
        render json: video, include: [detections: :person]

    end

    def create
        video = Video.new(video_params)
        if video.save
            render json: video
        else
            render json: {error: 'Unable to create Video'}, status: 400
        end
    end

    def update
        video = Video.find(params[:id])
	
        if video.update(video_params_update)
            render json: {success: "Success updated Video"}
        else
            render json: {error: "Failed updating Video"}
        end
    end

    def next_id
        video = Video.all.sort_by(&:id)[-1]
        if video
            render json: {next_id: video.id + 1}
        else
            render json: {next_id: 1}
        end
    end

    private
    def video_params
        params.permit(:title, :recording_start, :recording_end)
    end

    private
    def video_params_update
        params.require(:video).permit(:title, :recording_start, :recording_end)
    end
end
