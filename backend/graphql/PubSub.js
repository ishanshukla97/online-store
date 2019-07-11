const { PubSub } = require("apollo-server-express");

class Singleton {
	constructor() {
		if (!Singleton.instance) {
			Singleton.instance = new PubSub();
		}
	}

	getInstance() {
		return Singleton.instance;
	}
}

module.exports = Singleton;
