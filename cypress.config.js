const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    bankName:'BANK',
    dpid:'DPID',
    password:'PASSWORD',
  }
  ,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://meroshare.cdsc.com.np/'
  },
});
