//단항연산자 Unary Operators
//+(양)
//-(음)
// !(부정)
let a=5;
a=-a;


let boolean=true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);


// + 숫자가 아닌 탕비들을 숫자로 변환하면 어떤값이 나오는지 확인 할 수 있음
console.clear();
console.log(+false);    //0 
console.log(+null);     //0
console.log(+"");       //0
console.log(+true);     //1