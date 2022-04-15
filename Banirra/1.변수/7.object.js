let name='apple';
let color='red';

let display='사과';
//변수는 메모리에 생성
성
//객체는(힙으로 생성
/*
    그래서 변수.객체로 불러올수있음
    예를들면 apple.name <<이런식으로 불러올수있서...
    객체는 참조값이 메모리에 들어가있음.
    객체는 메모리셀안에 레퍼런스가 있기떄문에 메모리가복사가됨
    
*/

let apple={
    name:"apple",
    color:"red",
    display:"사과",
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange={
    name:"orange",
    color:"yellow",
    display:"오렌지",
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);