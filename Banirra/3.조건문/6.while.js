// while(조건) {}
//조건이 false가 될떄까지 {} 코드를 반복실행
let num=5;
while(num>=0) {
    console.log(num);
    num--;

}

let isActive=true;
let i=0;

while(isActive){
    console.log('아직 살아있습니!');
    if(i===100){
        break;
    }
    i++;
}


do{

}while(isActive);

