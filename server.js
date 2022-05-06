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

app.use((req, res, next) => {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			error: 'Missing friend name',
		});
	} 
		const newFriend = {
			id: friends.length + 1,
			name: req.body.name,
		};
		friends.push(newFriend);

		res.json(newFriend);
});

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
