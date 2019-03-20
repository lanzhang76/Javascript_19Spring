var NounProject = require('the-noun-project');
nounProject = new NounProject({
  key: '97b30ad008f44c72b1cc9f3a84a820b5',
  secret: '0f91dd2f06fd45cca0dc21d6bdb991d5',
});

var OAuth = require('oauth');

// `npm install oauth` to satisfy
// website: https://github.com/ciaranj/node-oauth

var oauth = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	'97b30ad008f44c72b1cc9f3a84a820b5',
	'0f91dd2f06fd45cca0dc21d6bdb991d5',
	'1.0',
	null,
	'HMAC-SHA1',
  {mode: 'no-cors'}

)

oauth.get(
	'https://api.thenounproject.com/icon/6324',
	null,
	null,
	function (e, data, res){
		if (e) console.error(e)
		console.log(require('util').inspect(data))
	}
)
