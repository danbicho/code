if (7 > 3) {
  console.log('7은 3보다 크다.');
}

if (3 > 7) {
  console.log('3은 7보다 크다');
}

var emotion = prompt('기분 어때요?');

if (emotion === '기분이 좋지않아요') {
  console.log('힘내세요');
} else {
  console.log('좋아요');
}

var number = prompt('숫자를 입력해 주세요');

if (number !== '3') {
  alert('입력하신 숫자는' +number+ '입니다');
}

var password = prompt('비밀번호를 입력해주세요');

if (password === '1234') {
  alert('환영합니다');
} else {
  window.location = "http://www.google.com";
}
