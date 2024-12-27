// console.log("heyyyy")

// if(true){
//     let a = 5;
//     console.log(a)
//     var a = 10;
//     console.log(a)
//     var a = 20;
//     console.log(a)
//     a = 10;
//     console.log(a)

// }
// console.log(a)

// let age = 19;
// let Status = (age>=18)?"I Can Vote" : "i Cannot Vote ";
// console.log(Status)

// let n = 5
// for (let i = 0 ; i > n ; i++ ){
//     let str = "* ";
//     console.log(str.repeat(i));
// }

// let n = 5;
// for (let i = n; i >= 1; i--) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 




// for (let i = n; i >= 1; i--) {
//     let str = " ";
//     console.log(str.repeat(i));
// }
//          *
//        * *
//      * * *
//    * * * *
//  * * * * *

// for (let i = n; i >= 1; i--) {
//     let str = " *";
//     let wyt = " ";
//     console.log(wyt.repeat(n - i) +  str.repeat(i));
// }

// * * * * *
//  * * * *
//   * * *
//    * *
//     *




// for (let i = n; i >= 1; i--) {
//     let str = " *";
//     let wyt = "  ";
//     console.log(wyt.repeat(n - i) +  str.repeat(i));
// }

// * * * * * 
//   * * * * 
//     * * * 
//       * * 
//         * 

// ARRAY DEMO

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push("litchi");
// console.log(fruits);


// let no = [1,2,3,4,5];

// let no2 = no ;

// // no = [];
// no.length = 0 ;
// console.log(no);
// console.log(no2);

// let num = [40,20,30,10,50];
// let num2 = [4,3,9,5,2,1]
// console.log(num2.sort());

// let shorted = num.sort(function(number){
//     if(number< num){
//         console.log(number);
//     }
// })


// function sum(...abc){
//     console.log(abc);
    
// }

// sum(1,2,3,4,5,6);

//Getter And Setter 

// let person = {
//     fName : "Rishu",
//     lName : "Sinha",
//     get FullName(){
//         return `${person.fName}        ${person.lName}`
//     },
//     set FullName(value){
//         let name = value.split(" ");
//         this.fName = name[0];
//         this.lName = name[1];
//     }
// }

// person.FullName = "Shaswat Sinha"
// console.log(person.FullName);  

// if(true){
//     const a = 5;
//     console.log(a);
// }

// console.log(a);
 

// let arr = [1,2,3,4,5];

// let ans = arr.reduce((a , b) => a + b );
// console.log(ans);


// let content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//     if(event.target.nodeName === "SPAN") {
//         console.log("click" + event.target.textContent);
//     }
// }); 

async function abcd(){
    let delhiMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delhi is hot");
        }, 10000);
    });

    let hydMausam = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hyderabad is cool");
        }, 20000);
    });
    let dM = await delhiMausam;
    let hM = await hydMausam;
    return [dM,hM];
}

// console.log(abcd());
