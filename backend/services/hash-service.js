const crypto=require('crypto');

class hashService{
    
         hashOtp(data){
             return crypto
            crypto.createHmac('sha256',process.env.HASH_SECRET).update(data).digest('hex')
        
    }
}


module.exports=new hashService();