
//문자열 타입
let string="안녕하세요";
string=`안녕!`;
console.log(string)


//특수 문자 출력하는법
string='"안녕!"'
console.log(string);

// 줄바꿈
string='안녕!\n수민아\t\t\t 내이름은';
console.log(string);


//템플릿 리터럴(Templeate Literal)
let id="수민";
let greetings="'안녕'"+id+"Hi\n즐거운 하루 보내요!";
console.log(greetings);



greetings=`!안녕 , ${id}`;
console.log(greetings);