const https = require("https");

const paystackPayment = {
  hostname: "api.paystack.co",
  port: 443,
  path: "/transactions/verify/:reference",
  method: "GET",
  headers: {
    Authrization: "PAYSTACK_SECRET_KEY",
  },
};

https
  .request(paystackPayment, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (error) => {
    console.log(error);
  });
