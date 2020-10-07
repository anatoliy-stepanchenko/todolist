class ApplicationController < ActionController::Base
    before_action :authenticate_user!
    protect_from_forgery with: :null_session
    layout :resolve_layout

    private

    def resolve_layout
        if controller_path.start_with?('devise')
            'devise'
        else
            'application'
        end
    end
end
