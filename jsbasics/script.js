// decision making
/*var age=18;
if (age<18)
{
    console.log("minor");

}
else if(age>=18)
{ 
    console.log("major");
}
age>=18? console.log("major"):console.log("minor");
*/
//function
/*function ranjana(firstName,LastName){
    console.log(firstName+'.'+LastName);
}
ranjana('rashmi','bali');*/

//array

/*var names=['ranjana','rashmi','rohit'];
console.log(names[2]);
console.log(names.length);
names.push("raj");
names.unshift("rajesh");
names.pop();
console.log(names);*/

/*
var myDetails={
    firstName:'ranjana',
    lastName:'bali',
    dob:1998,
    family:['ranjana','rashmi'],
    calcage:function(birthYear){
        return 2019-birthYear;
    }
};
*/
var bill;
var tips=[];
var bills=[];
function calculator(bill)
{
   if(bill<50)
  {
    tip=(20/100)*bill;
  }
   else if(bill>50 && bill<200)
  {
    tip=(15/100)*bill;
  }
else 
  {
    tip=(10/100)*bill;
  }

tips.push(tip);
bill=Number(tip)+Number(bill);
bills.push(bill);
}
calculator('124');
calculator('48');
calculator('268');
console.log(bill);
console.log(tips);
