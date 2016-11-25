var obj = {
  greeting: 'howdy',
  direction: 'down',
  color: 'red',
  'spaces-and-dashes can be used' : ' but need to have quotes'
};
for (var xxx in obj) {
  /* console.log(obj[xxx]); */
  console.log(obj[xxx]);
}
