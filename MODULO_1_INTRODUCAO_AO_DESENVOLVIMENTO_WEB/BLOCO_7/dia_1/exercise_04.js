const greaterWord = word => word.split(' ').reduce((acc, word) => acc.length > word.length ? acc : word);

console.log(greaterWord('Estou escrevendo esta frase apenas para fazer um teste'));