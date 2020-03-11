# config/initializers/datadog-tracer.rb

# require 'ddtrace'

Datadog.configure do |c|
  c.use :rails, service_name: 'my-rails-app'
  c.analytics_enabled = false 
  c.tracer tags: { 'env' => 'dev' }
end
