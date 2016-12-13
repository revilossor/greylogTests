module.exports = {
  get:(req)=> {
    return {
      short_message:"Hello there",
      host:"example.org",
      facility:"test",
      _foo:"bar"
    };
  }
}
