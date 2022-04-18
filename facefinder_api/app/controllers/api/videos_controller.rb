class Api::VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos
    end

    def create
        video = Video.new(video_params)
        if video.save
            render json: video
        else
            render json: {error: 'Unable to create Video'}, status: 400
        end
    end

    def next_id
        render json: {next_id: Video.all.sort_by(&:id)[-1].id + 1}
    end

    private

    def video_params
        params.permit(:title, :recording_start, :recording_end)
    end
end
