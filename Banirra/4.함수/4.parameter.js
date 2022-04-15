
//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments
//에 저장됨
//매개변수 기본값 Default Parameters a=1,b=1

function add(a,b){
    console.log(a);
    console.log(b);
    console.log(arguments);
  
    return a+b;
}

add();


//Rest 매개변수 Rest Parameter

function sum(a,b, ...numbers){
    console.log(a);
    console.log(b);
    console.log(numbers);
}

sum(1,2,3,4,5,6,7,8);