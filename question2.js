console.log(generateString('ABCD'));
console.log(generateString('ABCD'));
console.log(generateString('ABCD'));
console.log(generateString('ABCD'));
console.log(generateString('ABCD'));

function generateString(input) {
    var numChar = 4;
    var characters ='ABCD';
    var result = '';
    var ans = '';
    var a = 0;
    var correct = 0;
    var locate = 0;

    charactersLength = characters.length;
    for (let i = 0; i < numChar; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for (let i = 0; i < result.length; i++){
      for(let j = 0; j < input.length; j++){
        if(input[j] == result[i]){
          correct++;
        }else if(i == j){
          locate++;
        }else{
        }
      }
    }
    return "Answer"+" "+input+" "+"Random"+" "+result+" "+"Correct All"+" "+correct+" "+"Correct Location"+" "+locate;
}