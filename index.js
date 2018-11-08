var spawns = require("spawns");

module.exports = function(commands, options){
  
  return new Promise((resolve,reject) => {
    
    spawns(commands,options).on("close", (code,signal) => {
      
      if(code === 0) resolve(code);
      else{
        const err = new Error("Process failed with code " + code);
        err.code = code;
        err.signal = signal;
        err.name = "SpawnError";
        reject(err);
      }
      
    });
    
  });
};