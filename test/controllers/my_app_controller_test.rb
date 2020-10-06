require 'test_helper'

class MyAppControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get my_app_index_url
    assert_response :success
  end

end
