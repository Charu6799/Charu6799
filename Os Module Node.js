 (7 sloc)  289 Bytes
var os=require('os');
console.log("CPU Architecture :"+ os.arch());
console.log("Free Memory :"+ os.freemem());
console.log("Total Memory :"+ os.totalmem());
console.log("OS Platform :"+ os.platform());
console.log("Current User Information :");
console.log(os.userInfo());
© 
