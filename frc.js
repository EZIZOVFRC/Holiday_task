//  ------------TASK1--SESVERENLER--------------
// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
//     ];
// let sesVerenler=voters.reduce((acc,value)=>{
//     if (value.voted===true) {
//         return acc+1
//     }
//     else{
//         return acc
//     }
// },0)
// console.log(`Ses Verenlerin Sayi : ${sesVerenler}`);

// -------------------TASK2----QIYMETCEM---------

// let wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//     ];

// let sum=wishlist.reduce((acc,list)=>{
//     return acc + list.price
// },0)
// console.log(`Qiymetlerin Cemi ${sum}`);

// ------------------TASK3-------UZUN SOZ------------

// let word =prompt('Cumle Gir Adamim:)')

// let ayrilmis= word.split(' ')
// let longWord=ayrilmis[0]
// for (let i = 0; i < ayrilmis.length; i++) {
//     if (ayrilmis[i].length>longWord.length) {
//         longWord=ayrilmis[i]
//     };
    
// }


// alert(`En uzun soz: '${longWord}'`)

// -----------------Ilk herfler boyuk---------------

// let cumle='salam men frc'
// let newCumle=cumle.split(' ')
// let bigger=''

// function biggest(array) {
//     for (let i = 0; i < array.length; i++) {
//         let soz=array[i]
//         let big =array[i].charAt(0).toUpperCase()+soz.slice(1)
//         bigger+=big+' '
//     }
//     return bigger
// }
// let boyudulmus = biggest(newCumle)
// console.log(boyudulmus);

// =====================Soz Kesmek task 5----------------

// let cumle='salam men frc necesen mende pisem sagol'
// let newCumle=cumle.split(' ')
// let kesik=''
// function cutter(array,cut) {
//     for (let i = 0; i < cut; i++) {
//         kesik+=array[i]+ ' '
        
//     }
//     return kesik
// }

// console.log(cutter(newCumle,4));