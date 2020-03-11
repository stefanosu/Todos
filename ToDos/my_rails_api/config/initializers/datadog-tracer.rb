# config/initializers/datadog-tracer.rb

Datadog.configure do |c|
  c.use :rails, service_name: 'my-rails-app'
end

Datadog.configure { |c| c.analytics_enabled = true } 
