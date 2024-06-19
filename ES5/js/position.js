//position.js
//<script>태그는 제외. 순수 자스 코드만
var button = document.querySelector('button'); //button태그가 없는 문서에 사용시 null
console.log(button);
console.log(button.textContent);
var fieldset = document.querySelector('fieldset');
var div = document.createElement('div');
div.setAttribute('style', 'width: 100px; height: 100px; line-height: 100px; text-align: center; background-color: red; border-radius:50px');
div.textContent = "DIV";
fieldset.append(div); //15:32