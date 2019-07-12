window.onload= () =>{

let pronoun = ['the','our','this', 'these','his'];
let adj = ['great', 'big' , 'small','terrible','tall'];
let noun = ['jogger','racoon','car','cat','dog'];





let arr = []

for (i=0; i<pronoun.length;i++) {
    for (x=0; x<adj.length;x++) {
        for (j=0; j<noun.length;j++) {
            arr.push(pronoun[i]+ adj[x]+ noun[j] + ".com  ")
        }
    }
}




document.querySelector('#excuse').innerHTML= arr;
}