const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
	{
		id: 1,
		name: 'Midori',
	},
	{
		id: 2,
		name: 'Gato',
	},
];

app.get('/friends', (req, res) => {
	res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
	let friendId = Number(req.params.friendId);
	const friend = friends[--friendId];
	if (friend) {
		res.json(friend);
	} else {
		res.status(404).json({
			error: 'Friend not found',
		});
	}
});

app.get('/messages', (req, res) => {
	res.send('<ul><li>Hi Midori!</li></ul>');
});

app.post('/messages', (req, res) => {
	console.log('Updating messages...');
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}...`);
});
