var assert = require('assert');
var spawns = require("../");
var expect = require('chai').expect;

describe("spawns", function() {
  it("normal", async function() {
    const code = await spawns(['ls', 'ls'], { stdio: 'inherit' });
    expect(code).to.equal(0);   
  });

  it("fail", async function() {
    try{
      const code = await spawns(['test-command-which-does-not-exist'], { stdio: 'inherit' });
    }
    catch(err){
      expect(err.code).not.to.equal(0);
      expect(err).to.be.an.instanceof(Error);
      expect(err.name).to.equal("SpawnError");
    }
  });
});