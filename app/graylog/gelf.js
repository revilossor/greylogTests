module.exports = {
  get:(req)=> {
    return {
      short_message:'from app',
      host:'example.org',
      facility:'test',
      _foo:'bar'
    };
  }
}
