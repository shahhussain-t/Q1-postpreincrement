let a=6;
let b=7;


let result =a++ + b++ + ++a - ++b - ++a * a + b + a-- + --b * a;
        // 6 + 7 + 8 - 9 - 9 * 9 + 9 + 9 + 8 * 8   1st multplication will tak place 
        // 6 + 7 + 8 - 9 - 81 + 18 + 64 
        //12 - 81 + 18 + 64
        //  -69  + 82
        // 13  

console.log(result)

// answer is verfied.














        // a=8,b=8