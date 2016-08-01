class ChatsController < ApplicationController
  def index
    @messages = Message.all
  end
end
