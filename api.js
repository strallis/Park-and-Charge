//export const ip = '192.168.1.255'
//inet 192.168.1.34 netmask 0xffffff00 broadcast 192.168.1.255
export const ip = '192.168.1.34'
//inet 130.229.154.89 netmask 0xffffc000 broadcast 130.229.191.255
//inet 130.229.154.89 netmask 0xffffc000 broadcast 130.229.191.255
//export const checkauthPath = `http://${ip}:8989/api/checkauth`
const params = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

// const fetch = require("node-fetch");
// var RCTNetworking = require('RCTNetworking')
//export const newSessionPath = `http://${ip}:8989/api/newSession`
export const newSessionPath = `http://${ip}:8989/api/newsession`
export const signinPath = `http://${ip}:8989/api/signin`
export const latestSessionPath = `http://${ip}:8989/api/latestsession`


// module.exports = {
//    latestSessionPath: 'http://130.229.154.89:8989/api/latestsession',
//    latestSession: function (){
//      const fetchParams = {
//        method: 'POST',
//        ...params,
//        body: JSON.stringify({
//          userName: 'dummy'
//        })
//      };
//      return fetch(latestSessionPath, fetchParams)
//        .then(response => response)
//        .then(data => data.json())
//    },
// };


module.exports = {
   signinPath: `http://${ip}:8989/api/signin`,
   signin: function (name){

     const fetchParams = {
       method: 'POST',
       ...params,
       body: JSON.stringify({
         userName: name
       })
     };

     return fetch(signinPath, fetchParams)
       .then(response => response)
       .then(data => data.json())
   },

   latestSessionPath: `http://${ip}:8989/api/latestsession`,
   latestSession: function (){
     const fetchParams = {
       method: 'POST',
       ...params,
       body: JSON.stringify({
         userName: 'dummy'
       })
     };
     return fetch(latestSessionPath, fetchParams)
       .then(response => response)
       .then(data => data.json())
   },
};




// export function createNewSessionRequest(username) {
//
//   const fetchParams = {
//     method: 'POST',
//     ...params,
//     body: JSON.stringify({
//       userName: username
//     })
//   }
//
//   return fetch(newSessionPath, fetchParams)
//     .then(response => response)
//     .then(res => res.json())
// }



//
// export const signinPath = 'http://localhost:8989/api/signin';
//
// export function signin (firstname, lastname){
//
//   const fetchParams = {
//     method: 'POST',
//     ...params,
//     body: JSON.stringify({
//       firstname,
//       lastname
//     });
//   };
//
//   return fetch(signinPath, fetchParams)
//     .then(response => response)
//     .then(data => data.json())
// };
