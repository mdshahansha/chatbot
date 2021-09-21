const otpServices = require("../services/otp-services");
const hashService = require("../services/hash-service");
const { hashOtp } = require("../services/hash-service");

class AuthController {
  async sendOtp(req, res) {
    //
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone  filled is required " });
    }

    const otp = await otpServices.generateOtp();

    const ttl = 1000 * 60 * 24;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    try {
      await otpServices.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "message sending failed" });
    }

    // res.json({hash:hash});
    // res.send(otp)
  }

  verifyOtp(req, res) {
    //logic

    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All fiels are required" });
    }

    const [hashedOtp, expires] = hash.split(".");

    if (Date.now() > expires) {
      res.status(400).json({ message: "OTP expires" });
    }

    const  data=`${phone}.${otp}.${expires}`;
    const isValid=otpServices.verifyOtp(hashOtp,data);
    if(!isValid){
        res.status(400).json({message:'invalid OTP'});
    }
    let user;
    let accessToken;
    let refreshToken;

  }
}

module.exports = new AuthController(); //iss class ka object  create ho raha h ,use object ko export kar rhe
