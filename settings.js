require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGWAKFsm3V*CUQQAAG4HAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nVmuaj+bKqqwYRBZUWRaVhax4iBEwLBEMQcMr*PoU9PT1btTvby1O4SZ17cu45+Q4Kgiu0QB0YfQclxRfIUL9kXYnACIzrJEEUDEEMGQQjIDumVWha7O+TBxV3iXO2QvIa0*aQTIPo2OxUwX8Q1vkhc57AbQjK+pDh6A+AQXwOkO571+dWPuJZpGpRI5yzRlNTYZc2GxxXKRxohJvaT+DWI0JMcZGa5RHliMJsgToXYvo5+isDEiSt5P01pUQxZ*LKPkRxeqJEp5sTPedh3S4O2aUrdp+jv24XQbpvZ9NOnYoPp1mgvV7OvBVut7EurR5EZxmep9dtqIiPb*QrnBYotmNUMMy6T+vuWctracz45Tx*OQ*4gxPJDmo8Lks3SVStVuYGX7nsPJj5+ueI0zE3dVFbbEggTjT6ipSHOpWX7CyT1Yvin1C2qbJM9KJ18ztxl7575fR*dDfNdbravwTlviUDn7FmHK0jZhbIk9D4umjadDGxnLbenbjP0Y*FXWY4QuOhBb48ErgR534rejv3qFbqWdvHNfOPbuXZ4+qDPmQ1*RPLSd49X9W9PZ84EsbP13BetR70JgNT7rxVcS4it4tdJzUJT6AxVr2Oy+qBX9dd4Vql6bW7eLuanCUrjXhPXS3TC78c60*3G51QZ8dgxN+GgKIUV4xChklxrynyEMD44qGIInaXF4iCu14tlKW3tfMZ9LSQJ9dy2qDLs16tpeUa+93kha*Vs2k+gSEoKYlQVaHYwhUjtHNQVcEUVWD017chKFDL3gbXtxP5IUgwrdiuqMuMwPh9qu+bMIpIXTCvKyKjXyAKRtxHGTGGi7TqdawLSKMjviDjCFkFRgnMKvTrhoiiGIwYrdGv1Bok7oVXgkU4050XMAT5fSA4BiOg8QrHSZoicKo0kr9WX5oeFZbllwIxMATZ*ZQg8IKi8LyiSJKkaCP5a1+**eLXw8WIQZxVYAQMN9e5i22Yy4M6UHezmW6mupHq4OM+78Z4E*4aPoeZbyO3pvlr4W48NzjtMTL2WUsiixdl0Z8c80SCXvP0DyBgBPzrVHMRenkR4oAKnOvM59l4Y6Pg0CyElnd1abMuHweoTER5j0wi4olhlU3SHdTHOXTVw4nljjRmB1dYQp6f7Uhk3100BDG64Aj9rVlbG*50GcgP3ux0DIKL40gDS15bz8oFCiqxZdLEcdlyidCV29yBdMetQyvc6aVbkaWjNa+xL3FHwzPRzL90an3UxumbZe+RyX4+Vfhupn5S*W+C0T35Bezn95+Te+Pd+4u7DX+D+PmU*Escx5Gw9cM9tl6Vs0SkK7d7FebToEizMILWWIsHjE8fw2Lgnypwu30bgjKDLCE0ByMAi5gSHIMhoKTuDWsXCflDM0O3beNnVjNYMf0jBFuco4rBvOyjKinioyKq0tspl5LSgtWxB3hM5s+9oTu9LD0G2XukgN5*VpKA2w9QSwECFAMUAAAICABlgChbJt1fwlEEAABuBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
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
