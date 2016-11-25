var counter = 1;
var answer;


while ( counter > 0) {
  answer = prompt('어떤 색의 테마 웹페이지를 보고싶은가요? (초록 or 빨강 or 노랑)');
  if ( answer === '초록' ) {
    break;

  } else if ( answer === '빨강' ) {
    break;

  } else if ( answer === '노랑' ) {
    break;
    
  }
  counter++;
}
