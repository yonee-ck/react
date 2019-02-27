const readline=require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let T = 0;
let min = 1;
let max = 45000;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

rl.setPrompt("T를 입력해주세요.(1 ≤ T ≤ 1,000) : ");
T = rl.prompt();
rl.on("line",(data)=>{
    if (T < 1 || T > 1000) {
        rl.setPrompt("T 값의 범위를 다시 확인해주세요.");
    } else {
        for(let i=0; i<T; i++) {
            let a = getRandomInt;
            let b = getRandomInt;

            rl.setPrompt('aaaa' + a);

            let result = 0;
            let low = 0;

            for (let j=1; j<=Math.min(a, b); j++) {
                if((a%j==0)&&(b%j==0)) {
                    low = j;
                }
                result = a*b/low;
            }
            rl.setPrompt(result);
            // console.log(result);
        }
    }
});

