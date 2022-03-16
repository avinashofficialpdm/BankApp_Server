

database = {
    1000: { acno: 1000, uname: "Neer", password: 1000, balance: 5000,transaction:[] },
    1001: { acno: 1001, uname: "Vyom", password: 1001, balance: 5000,transaction:[]  },
    1002: { acno: 1002, uname: "Laisha", password: 1002, balance: 5000,transaction:[] }
  }

 const register= (acno,uname,pass)=> {

    if (acno in database) {
      return {
        statusCode:411,
        status:false,
        message:"User already exists"
      }
    }
     else {
      database[acno] = {
        acno,
        uname,
        password:pass,
        balance: 0,
        transaction:[]
      }
      return {
        statusCode:200,
        status:true,
        message:"Registered successfully"
      }
    }
  }

 const login= (accno,passs)=>{
    if (accno in database) {
      if (passs == database[accno]["password"]) {
        currentAcno=accno
        currentUname=database[accno].uname
        return {
          statusCode:200,
          status:true,
          message:"Login success",
          currentAcno,
          currentUname
        }
      } else {
        return {
          statusCode:422,
          status:false,
          message:"Incorrect password"
        }
      }
    } else {
      return {
        statusCode:411,
        status:false,
        message:"Account not found"
      }
    }
  }

  const  deposit= (acno,password,amount)=>{
    let amt=parseInt(amount)
    let db=database
    if(acno in db){
      if(db[acno].password==password){
        db[acno].balance+=amt
        db[acno].transaction.push({
          amount:amt,
          type:"Deposit"
        })
        return {
          statusCode:200,
          status:true,
          message:amt+" is Success fully added and new balance is"+db[acno].balance
        }
        // console.log();
        
        
      }else{
        return  {
          statusCode:422,
          status:false,
          message:"Incorrect password"
        }
      }
    }else{
      return {
        statusCode:411,
        status:false,
        message:"Account not found"
      }
    }
  }

  module.exports={
      register,login,deposit
  }