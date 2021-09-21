const crypto = require("crypto");
const hashService=require('./hash-service')

const smsSid=process.env.SMS_SID;
const smsAuthToken=process.env.SMS_AUTH_TOKEN;

//ye hame ek  function return karta h ,jisko hmmm kuch paramter pass karege ,ism ejo 3rd paramter hota h jo config object hota h
const twilio=require('twilio')(smsSid,smsAuthToken,{
  lazyLoading:true
})

class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }
async sendBySms(phone,otp) {
    return await twilio.messages.create({
      to:Phone,
      from:process.env.SMS_FROM_NUMBER,
      body:`Your condelences OTP is ${otp}`,
    })
  }

  verifyOtp(hashedOtp,data) {
    let computeHash=hashService.hashOtp(data);
    return  computeHash==hashedOtp;
  //   if(computedHash==hashedOtp){
  //     return true;
  //   }
  //   return false;
 }
}

module.exports = new OtpService();
