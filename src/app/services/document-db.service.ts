import { Injectable } from '@angular/core';
// const mongoose = require('mongoose');
// @ts-ignore
const MongoClient = require('mongodb').MongoClient;
// @ts-ignore
const assert = require('assert');


@Injectable({
	providedIn: 'root'
})
export class DocumentDBService {

	dbName = 'serverless-functions-rhfqi';
	private __url = `mongodb+srv://writetome51:Gayrainbow69%21@cluster0-bohdq.mongodb.net/${this.dbName}`;


	ifAllUserDataIsProvided_saveUser(req, save) {

		//	let userObject = getUserObject(req);

		//	save(userObject);
	}


	getUserManipulator(req, res, viewName) {
		return function(users) {
			users.findOne(
				{firstName: '', email: ''},
				function(err, doc) {
					assert.equal(null, err);
					// do something.
				}
			);
		};
	}


	manipulateCollection(manipulator) {
		MongoClient.connect(
			this.__url, {useNewUrlParser: true},

			function(err, client) { // client is instance of MongoClient
				assert.equal(null, err);

				const db = client.db();
				const users = db.collection('user');

				manipulator(users);

				client.close();
			}
		);
	}


	logUsers() {
		this.manipulateCollection((users) => console.log(users));
	}


}
