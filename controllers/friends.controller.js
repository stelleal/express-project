const friendsModel = require('../models/friends.model');

function postFriend(req, res) {
	if (!req.body.name) {
		return res.status(400).json({
			error: 'Missing friend name',
		});
	}
	const newFriend = {
		id: friendsModel.length + 1,
		name: req.body.name,
	};
	friendsModel.push(newFriend);

	res.json(newFriend);
}

function getFriends(req, res) {
	res.json(friendsModel);
}

function getOneFriend(req, res) {
	let friendId = Number(req.params.friendId);
	const friend = friendsModel[--friendId];
	if (friend) {
		res.json(friend);
	} else {
		res.status(404).json({
			error: 'Friend not found',
		});
	}
}

module.exports = {
	postFriend,
	getFriends,
	getOneFriend,
};
