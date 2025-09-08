require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAE6GJ1shgkevTAQAAG4HAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nVGgFBxKquGkQFVBC*ha15CBAgyFcnQRun*O9baPf0POzO9vIUktS55557Tn6CosQULVADRj9BRfAFMtQuWVMhMALjOooQAV0QQgbBCAwmwetqsBvq5u4QzU55bntUxcLYcZaqaDH2mlZi+mrqZDZ8AfcuqGo*w8EfACd9jsmKceqYh*lqNo4cW3IKhBe1LqK5FVRkVcVD0*VOB*UF3FtEiAku4mmVoBwRmC1Q40BMvkaf6u7YjAQpryz3irTAEUgk5ObS1XRtLbviVc84H6Nsnq2*Rv82OBWazYmvEis7+qsVeKdIRsPQTea9zQpbxRUrSsVZN+H6pE9xXKDQDFHBMGu+rPvC8NaG56mzwz52dC4P5waedeJmlQdBRJr9TbpVtVrsqBF*jXgaKMF65u03b6sm1Bjj1IG9SHyUjROvihIhiYnBTZeS86H7k7hDPrxy*j+6a9p60lf6l2DPJdLlcmwInc4VTz2bMFW3qavn8jQTDaEqyi*SFyxLnsBmvZveUu8wWQe4jgwq7a8Vtac1RVmqDvjp6joJPulDVpM*sTR531yrOXMPYm*xZovyhF+cFWmxDf3OMFL2655kJ6tFOhj2zivvtogMf18TB*djJzzWJLQUmfNv+RFeSsNMBha7cFISvzw6OqPGDMGIv3cBQTGmjECGy+KxJwtdAMPLFgUEsYe8YCoY4sExKyzMj+wwW57EzIW2Em8XsJiceoupKjNFt00xi19AF1SkDBClKDQwZSVpLEQpjBEFo79+dEGB3thzcG25Pt8FESaU7Yu6ykoYfkz14xAGQVkXbNsUgdYuEAEj7nMbMYaLmLY61gUkQYIvSEsgo2AUwYyiXx0igkIwYqRGv1KrleFDeMd2D57ogS7IHwPBIRgBhZc5TlJkgRtKI+k7*XZtUWFVfSsQA12QPW4JAi*IMs*LsiRJsjKSvrf791*8WrgQMYgz2hrPwSp3MbWp1bsodK*rqhmrWqyCz34+jPEU*ubZXnY0kVOTPC2czdZxzweMtEP2VgYG3x*0j5MkjyS4vb78AwgYgYs1Vq693O*xOtyN07eNtulrwnG2ShQic32M1VriM1ckTZH4m2Vvrl5RCH0x0eaZfQ0O*oLs8uGswosTN0PKON7biXZ9aauF6IID9HuxFeTJbZ0HvrzSjXRKhZ4w8d0hv2G+xfnQ9utN9RqLVUpUTtNUf+UrseROReJN0+VQeLNcWezjXMy4WY57HWINs2WsPi37iEz2*lThh5naSbW*EUaP5Bewnd9*Tu7Ju*UXd+*+BvH+lPxLHMeBsDt6B2yk8qtUSjdunwrzmVvEmRdAY6yEHcbHold0jmcK7vcfXVBlkEUlycEIwCIkJQ5BF5Cybg1rFlH5pxdKNU3tvfEMUqZ+hmCHc0QZzKs2qpIsDPpDYfC85ZCyMiBNWgAxmtutoRu1qrYMso9IAbX95tIF3P8GUEsBAhQDFAAACAgAToYnWyGCR69MBAAAbgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdAQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '917005972085,918731810311',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'alongbots',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
