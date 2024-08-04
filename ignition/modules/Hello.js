const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("HelloModule", (m) => {

  const hello = m.contract("Hello", []);

  return { hello };
});
