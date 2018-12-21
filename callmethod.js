
console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const HelloWorldABI = require("./HelloWorldABI.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const tempContract = web3.eth.contract(HelloWorldABI);
var tempContractInstance = tempContract.at("0x1812390a1cce86904c282c6998b194a19ebc9a86");
console.log(tempContractInstance.setProfileData);
console.log('unlocking local geth account');

// this is to set employer's acccount and  set profile data
// const password1 = "password";
// try {
//     web3.personal.unlockAccount("0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d", password1);
// } catch (e) {
//     console.log(e);
//     return;
// }

// tempContractInstance.setProfileData("regi","12345567890","pineapple@gmil.com",1997,"404",{
//     from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });

// this is to call getProfiledata by specific pan number
// console.log(tempContractInstance.getProfileData.call("404"));

// this is to set intern and confirm it for interview
// const password2 = "password";
// try {
//     web3.personal.unlockAccount("0xa58530a61902e8bd518a434ff8db413ef4e53940", password2);
// } catch (e) {
//     console.log(e);
//     return;
// }


// tempContractInstance.confirmProfile("104",{
//     from: "0xa58530a61902e8bd518a434ff8db413ef4e53940",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });


// here employer calls intern for interview 
// const password3 = "password";
// try {
//     web3.personal.unlockAccount("0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d", password3);
// } catch (e) {
//     console.log(e);
//     return;
// }

// tempContractInstance.CallforInterview("104",{
//     from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });


// here employer sets the results of interview to an intern
// const password4 = "password";
// try {
//     web3.personal.unlockAccount("0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d", password4);
// } catch (e) {
//     console.log(e);
//     return;
// }

// tempContractInstance.setInterviewResult("404","pass","6months",15000,{
//     from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });


//here intern can view the result 
console.log(tempContractInstance.getInterviewResult.call("404"));

