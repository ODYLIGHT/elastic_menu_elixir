defmodule ElasticMenuElixir.Router do
  use ElasticMenuElixir.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ElasticMenuElixir do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/emc",  ElasticMenuController, :index
    get "/emc/:messenger", ElasticMenuController, :show
  end

  # Other scopes may use custom stacks.
  # scope "/api", ElasticMenuElixir do
  #   pipe_through :api
  # end
end
