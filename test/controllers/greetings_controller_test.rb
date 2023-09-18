require "test_helper"

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get random_greeting" do
    get greetings_random_greeting_url
    assert_response :success
  end
end
