// Code your solutions in this file

function writeCards(namesArray, surprise){
    let cards = [];
    for (let i = 0; i < namesArray.length; i++){
        let messages = `Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!`
        cards.push(messages);
    }
    return cards;
}
function countDown(start){
for(let j = start; j >= 0; j--){
    console.log(j);
}
}



