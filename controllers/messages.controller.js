const path = require('path');

function getMessages(req, res) {
	res.render('messages', {
		title: 'Messages to my Friends',
		friend: 'Midori',
	});
	// res.sendFile(path.join(__dirname, '..', 'public', 'images', 'fish.jpg'));
}

function postMessage(req, res) {
	console.log('Updating messages...');
}

module.exports = {
	getMessages,
	postMessage,
};
