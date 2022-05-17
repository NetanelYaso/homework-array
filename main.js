// var nameArray = ['Netanel','Eldad','Natan','Yonatan','Sara'];
// console.log(nameArray)
// console.log(nameArray[3])
// for (var i = 0; i < nameArray.length; i++){
//     console.log(nameArray[i])
// }

// var numbersArray = [100,220,335,450,567,854,900]
// console.log(numbersArray)
// console.log(numbersArray[4])
// for (var i = 0; i < numbersArray.length; i++){
//     console.log(numbersArray[i])    
// }

// var oddNumbers = [0,15,24,34,17,7,48,24,36,50]
// console.log(oddNumbers)

// for (var i = 0; i < oddNumbers.length; i++){
//     if(oddNumbers[i]%2==0){
//     console.log(oddNumbers[i])
// }   
// }
// var myArray = ['hello',2,'world','jacob',6,7,'bye',98]
// console.log(myArray)
// for (var i = 0; i < myArray.length; i++){
//     if(myArray[i]*1!=myArray[i]){
//     console.log(myArray[i])}
// }
// var someArray = []
// someArray.push(9)
// var printArray = []
// for (var i = 0; i < 10; i++){
//     printArray.push(i);
// }
// console.log(printArray)

// var sumAndavg = [5,3,7,8,11]
// var sum=0
// var avg=0
// for (var i = 0; i<sumAndavg.length; i++){
//     sum += sumAndavg[i]

// }   
//  console.log(sum)
//  console.log(avg=sum/sumAndavg.length)

// var names = ['Netanel','Jacob','Bat-el','Daniel','Aviel']
// for (var i = 0; i < names.length; i++) {
//     console.log(names[i])
    
// }
// function arrayAndargument(num) {
// for (var i = 0; i < arrayAndargument.length; i++) {
//    if(num==arrayAndargument[i]){
//     console.log(true)
// }
// }
// }
// arrayAndargument( 5,arrayAndargument = [3,45,35,5,23,8])

// function num(Array) {
//     var sum =0
//     for (var i = 0; i < Array.length; i++) {
//         if(Array[i]%2==0){
//             sum++
//         }
//     }
//     return sum
// }
// function lengthArray() {
// var array1=[]
// var array2=[]
//     if(array1.length==array2.length){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }    
// }
//lengthArray()
// function maxArray(Array) {
// var max=Array[0]
// for (var i = 0; i < Array.length; i++) {
//     if(max<=Array[i]){
//         max=Array[i]
//     }  
// }
//     return max
// }

// function minArray(Array) {
//     var min=Array[0]
//     for (var i = 0; i < Array.length; i++) {
//         if(min<=Array[i]){
//             min=Array[i]
//         }  
//     }
//         return min
//     }

// function sumArray(array) {
//     var sum=0
// for (var i = 0; i < array.length; i++) {
//     sum += array[i]
// }
// return sum
// }

// function maxDoublemin(array) {
//     var max=0
//     var min= 0
//     for (let i = 0; i < array.length; i++) {
//         if(max<=array[i]) {
//             max=array[i]
//         }       
//     }
//     if(min>=array[i]) {
//         min=array[i]
//     }
//     return max*min    
// }  


//   function highevenArray(array) {
//    var max = array[0]
//    var index =0;
//   for(i=0; i<array.length;i++){
//       if(array[i]%2==0){
//           if(max<=array[i]){
//              max=array[i] 
//              index=i;  
//           }  
//       }
//      }
//      return index   
//   }

//  function oddArray(array) {
//      var sum = 0;
//      var odd =0;
//      for (var i = 0; i < array.length; i++) {
//          if(array[i]%2 != 0){
//              sum+= array[i] 
//          console.log(array[i])
//          }
//      }
//       console.log(sum) 
//  }
//   oddArray([4,2,5,3,6,7,8,1])

// function singleName(name,namesArray) {
    
// }
// function namesArray(array,name) { 
//    array.push(name)
//     console.log(array)
// }
// namesArray( ['Netanel','Yossi','Dawit','Dalia','Daniel'],'Chen')

// function unshiftEmail(array,email) {
//     array.unshift(email)
//     console.log(array)
// }
// unshiftEmail(['netanelyaso12@gmail.com','yosibalcho@gmail.com','liordawit@gmail.com','yasomalako@gmail.com'],'znavoardai@gmail.com')

// function evenIfnumbers(array,num) {
//         if(num%2==0)  {
//             array.unshift(num) ;   
//         } 
//         else{
//             array.push(num);
//         }   
//         console.log(array)
//     }
//  evenIfnumbers([2,32,35,5,6,7,8,9,34],5);

// function popAndfinish(array,num) {
//     var temp;
//     for (var i = 0; i < array.length; i++) {
//         if(num==array[i]){
//             temp=1;
//         array.splice(i,1);
//         i-- ;
//     }      
//   }
//   if(temp!=1){
//     array.push(num);
//   }
//   console.log(array);
// }
// popAndfinish([8,5,6,8,4,9,7,63,89,2],1);

// function highArray(array,num) {
//     var max=array[0]
//     for (var i = 0; i < array.length; i++) {
//         if (max<array[i]) {
//             max=array[i]
//         }
//     }
//     if(num>max){
//         array.unshift(num)
//     }
//     else{
//         array.push(num)
//     }
//     return array
// }

// function popNumbers(array,num) {
//         if(num<array.length){
//             array.splice(num,1)
//         }     
//         console.log(array)
//     }
//     popNumbers([1,2,3,4,5],2)


    