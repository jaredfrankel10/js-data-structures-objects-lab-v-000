// Write your solution in this file!
let driver = {}
 
 function updateDriverWithKeyAndValue(driver, key, value){
  Object.assign({}, driver, {[key]: value});
 }
<<<<<<< HEAD

=======
 
>>>>>>> 910c5be72755b6635d37281675b88f0ad48450dc
 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value;
   return driver;
 }
<<<<<<< HEAD

=======
 
>>>>>>> 910c5be72755b6635d37281675b88f0ad48450dc
 function deleteFromDriverByKey(driver, key){
   let newDriver = Object.assign({}, driver);
   delete newDriver[key];
   return newDriver;
 }
<<<<<<< HEAD

 function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver[key];
   return driver;
 }
=======
 
 function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver[key];
   return driver;
 } 
>>>>>>> 910c5be72755b6635d37281675b88f0ad48450dc
