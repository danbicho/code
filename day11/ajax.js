
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b',
  success: function(weather_data){
    console.log(weather_data);
  }
});

var to_be_run_on_server_response = function(weather_data) {
  $('#container').empty();
  $('#container').append('현재 기온 : ' + weather_data.main.temp + '<br>');
  $('#container').append('오늘의 최대 기온과 최저기온 : ' + weather_data.main.temp_max + ', ' + weather_data.main.temp_min + '<br>');

  for (var i = 0; i < weather_data.weather.length; i++) {
    $('#container').append('현재 날씨 정보 : ' + weather_data.weather[i].description + ', ' + weather_data.weather[i].description + '<br>');
  }

  $('#container').append('바람 속도 : ' + weather_data.wind.speed + '<br>');
  $('#container').append('해돋이와 일몰시간 : ' + new Date(weather_data.sys.sunset*1000) + ', ' + new Date(weather_data.sys.sunrise*1000) + '<br>');
};

$.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b').success(to_be_run_on_server_response);

$('a').click(function( event ) {
  event.preventDefault();
  $('#container').empty();
  $('#container').text('요청하신 데이터를 서버에서 가지고 오는 중입니다.');

  $(this).text();
    if ((this).text === 'Korea') {
      $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=korea&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b',
        success: function(weather_data){
          console.log(weather_data);
        }
      });


    $.get('http://api.openweathermap.org/data/2.5/weather?q=korea&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b')
    .success(to_be_run_on_server_response);
  } else {
    $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=china&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b',
      success: function(weather_data){
        console.log(weather_data);
      }
    });


  $.get('http://api.openweathermap.org/data/2.5/weather?q=china&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b')
  .success(to_be_run_on_server_response);
  }
});
