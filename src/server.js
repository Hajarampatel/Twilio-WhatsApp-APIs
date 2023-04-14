const express=require("express");
const app=express();
const sendSms=require("./temp");
const bodyParser=require("body-parser");
app.use(bodyParser.json());


app.post('/message', (req, res) => {
  const {accountSid, authToken, from,to, message} = req.body;
  const data = {
    accountSid, 
    authToken, 
    from,
    to,
    message
  };
  sendSms(data);
  res.status(201).send({
    message: 'Message sent successfully ',
    data:data 
})
});
app.post('/media', (req, res) => {
    const {accountSid, authToken, from,to, mediaUrl} = req.body;
    const data = {
      accountSid, 
      authToken, 
      from,
      to,
      mediaUrl
    };
    sendSms(data);
    res.status(201).send({
      message: 'Message sent successfully with media!',
      data:data 
  })
});

app.listen(3000,()=>{
    console.log("Server is listening at 3000");
})


// VIDEO -  https://player.vimeo.com/external/559880023.sd.mp4?s=7445cd904634755802174ff794f2098ad80967f1&profile_id=165&oauth2_token_id=57447761
// IMAGE - https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg
// PDF  -  https://www.africau.edu/images/default/sample.pdf