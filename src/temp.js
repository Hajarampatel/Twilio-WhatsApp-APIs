const sendSms = (data) => {
  const client = require('twilio')(data.accountSid, data.authToken);
 
  if(!data.hasOwnProperty('mediaUrl') && data.hasOwnProperty('message')) {
    client.messages
    .create({
       from: data.from,
       to: data.to,
       body : data.message
     })
    .then(message => console.log(message.sid));
  } else if(data.hasOwnProperty('mediaUrl') && !data.hasOwnProperty('message')) {
    client.messages
    .create({
       from: data.from,
       to: data.to,
       mediaUrl:data.mediaUrl
     })
    .then(message => console.log(message.sid));
  }
}

module.exports = sendSms;
