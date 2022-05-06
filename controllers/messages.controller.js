function getMessages(req, res) {
	res.send('<ul><li>Hi Midori!</li></ul>');
}

function postMessage(req, res) {
	console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};