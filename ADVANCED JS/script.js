//js
//variables
var a=10;

console.log(a); //10

var b="bushra";//string

console.log(b);//bushra

var c=true;//bolean

console.log(c);//true

var d=12.1;//float

console.log(d);//12.1

var f=null;

console.log(f);//null

var f;
console.log(f);//undefined

//conditional statments
var age=50;
if (age>=35)
{
console.log("you're old");
}
else
{
    console.log("youre young");
}

var marks=100;
if(marks=90)
{
    console.log("A+");
}
else if(marks>=70 && marks<90)
{
    console.log("b+");
}
else if(marks>=50 && marks<70)
{
    console.log("C+");
}
else
{
    console.log("F");
}


//loops
for (var i=0; i<=10; i++)
{
    console.log(i);
}

//while loop
var i=0;
while(i<=10)
{
    console.log(i);
    i++;
}
//do while loop
var i=0;
do{
    console.log(i);
    i++;
}
while(i<=10);



//functions
function add(a,b)
{
    return a+b;
}
console.log(add(10,20));//30


function checkvoteeligiblity(age)
{
    if (age>=18)
    {
        console.log("you are eligible to vote");
    }
    else
    {
        console.log("you are not eligible to vote");
    }
}
//differnce between parameters and arguments
checkvoteeligiblity(20);//you are eligible to vote
checkvoteeligiblity(10);//you are not eligible to vote



class student{
    constructor(name,age,){
        this.name=name;
        this.age=age;

    }
    getname(){
        return this.name;
    }

}
var student1=new student("bushra",20);
let ahmed = new Student("Ahmed", 21, 102);
let asad = new Student("Asad", 22, 103);
{
    console.log(ali.getDetails());

}
