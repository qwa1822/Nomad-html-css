
function  iterate(max,action){
    for(let i=0; i<=max; i++){
        action(i);
    }
}


function show(show){
    console.log(show);
}


function doubleArea(Number){
    console.log(Number*2);
}

setTimeout(()=>{
    console.log("3초뒤 이함수가 실행될거에요~");
},3000)