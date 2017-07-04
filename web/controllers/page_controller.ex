defmodule ElasticMenuElixir.PageController do
  use ElasticMenuElixir.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
