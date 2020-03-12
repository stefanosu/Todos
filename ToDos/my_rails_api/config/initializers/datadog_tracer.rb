# config/initializers/datadog-tracer.rb



Datadog.configure do |c|
  c.use :rails, service_name: 'my-rails-app'
  c.analytics_enabled = true 
  c.tracer tags: { 'env' => 'dev' }
end
