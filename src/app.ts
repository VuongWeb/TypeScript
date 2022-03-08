export {}

type Product={
    id:number;
    name:string;
}

const a : string ="lê"
const b : string ="vương"

const name:string ="Lê văn vương";
const age:number = 17;
const status:boolean = true;
const info :Product = {
    id:1,
    name:"vuong"
};
const stringArr:string[]= ['a','b'];
const objectArr:object[] =[{id:1},{id:2}]


function show(a:string ,b:string) {
    console.log(a+b) ;
}
show(a,b)

 document.querySelector('#h2').innerHTML=name;
 document.querySelector('#h3').innerHTML=age;
 document.querySelector('#h4').innerHTML=stringArr;
//  document.querySelector('#h5').innerHTML=objectArr;