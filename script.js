window.onload= () =>{

let pronoun = ['the','our','this', 'these','his'];
let adj = ['great', 'big' , 'small','terrible','tall'];
let noun = ['jogger','racoon','car','cat','dog'];



let domain='';

pronoun.forEach((pronoun) => {

    adj.forEach((adj) =>{

        noun.forEach((noun)=>{

            domain += pronoun + adj + noun + '.com' + '<br>';

         });

    });

    });
//!-----another way of doing it!
//let arr = []

//for (i=0; i<pronoun.length;i++) {
   // for (x=0; x<adj.length;x++) {
     //   for (j=0; j<noun.length;j++) {
       //     arr.push(pronoun[i]+ adj[x]+ noun[j] + ".com  ")
      //  }
    //}
//}







document.querySelector('#excuse').innerHTML= domain;
};