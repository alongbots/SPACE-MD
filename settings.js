require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOpMKVuI1JMcTwQAAG4HAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3nFGuXTj6quGkRERBFFhGZrHtIQMAiBDkHFKf*7Fnb39DzszvbyFJLUueeee05+AlLiGlmoBZOfoKL4DBnqlqytEJiAaZMkiIIeiCGDYAJUY2AF9uGy1XSqNPqreLbCpeYHt2IZ01qEeMR2uwhxheg9gXsPVM1LjqM*AMZcv5GOg8tqjZxmacCLNiXyyGughct4dSN7LMgNsaPgYj6Be4cIMcUk1asjKhCFuYVaB2L6Nfrtqn9T3Cm5BuWND6o9qcMhd3aFJm5HpD1ejNwnYRiPSbD+Gv2Utc6zaGYBP5NzUYN5nm6Dm79w2hNp*Dh*9V4FUyqLhbd+o1*jlKDYjBFhmLVf1h1Pz4RbKjg5iKbcvER5RpdJdnnx0nopWSbZ1fq1aCKYHE5fI75vVWQd8Eg11mezoaLF5v2VaS0SUVfWbri2q*7x5KjPx4X6O3GHfnjl9H90N4zBptqY8Sl9WQvk4tcHDnryzljEkqLoemOnke978Yh9lf4um2pzjyv2QXLY7ZU85LG0mXuxb3v8lr*GUxK5*kYc+Lz0SR+yhv6JZY44dGuWNHDmZ9Ye++fxzpqf3HxUGrbZBKdkWpbGjdOhfU6al*zQSrg6hz48ZtJJlJ2aFERfrFfw1BZ7u9Tq0C7s6eXp0dEJtWYMJvy9ByhKcc0oZLgkj73huAdgfHZRRBF7yAtW1Ivmo8hl*ilgc51mSNrw1qx*UU1sN31UP9cBKVrvetWfQA9UtIxQXaN4gWtW0naN6hqmqAaTv370AEFX9ja4rpzI90CCac080lR5CeOPqX4cwigqG8LclkRat0AUTAaf24gxTNK607EhkEZHfEbaEbIaTBKY1+hXh4iiGEwYbdCv1Gpl3Ak*CpXxzAgXoAeKx0BwDCZgzA8HA3k8FAYjeTL8Xn+7dKiwqr4RxEAP5I9bgsALwyHPD4eyLA*Hk+H3bv*+i18HFyMGcV6DCdCcV3VwNjV9PaP9kWcYqp6qWqqCz34+jPEm*C20w9w3kdPQIiPOznWeTweMtEN+LaMFLyqiPzsWiQzdy9M*gIAJOAhWJq6WCXTV5IaXaGYKqg6vebFIOWUzGNCtpCwj5WK*nD0+twWbNli9ro5BbO+4LOMCHcv7YbO5urwjGEfllpyeZ9unrlqMzjhCvxeDXhT75nRfekXh0ECaGZtWh9sqS7ZckSzNsuUuuoatVM6yMPMUd7F63t9EgVfa9Lrw+a3lGge2I7ExUqTmdrzygTV7t+wjMvn7U4UfZuom1f0mGD2ST2A3v*+c3Bvvzl+De+83iPen5F*iOI2EvR8e8CIbvsqlfBt4mbCcP5M0DyO4mI5jjvGpFBLOP9Xgfv*RA1UOWVLSohOGxLTEMegBWjadYU2SlH8opqmmqalvjeewZupnCPa4QDWDRdVFVR5K*GAoy2+3HFpWC1gfOwApWdqdoVu1qlwG2UekgNp91tIF978BUEsBAhQDFAAACAgA6kwpW4jUkxxPBAAAbgcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAdwQAAAAA',
  
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
