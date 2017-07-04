# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :elastic_menu_elixir,
  ecto_repos: [ElasticMenuElixir.Repo]

# Configures the endpoint
config :elastic_menu_elixir, ElasticMenuElixir.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "zGGPOIa1QtBqIhif+KY9mIsH3OIYplLkpZs3u1ZZDVkUFUQ01jhsp8KWARLIvjL7",
  render_errors: [view: ElasticMenuElixir.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ElasticMenuElixir.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
