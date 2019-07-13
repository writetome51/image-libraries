// const mongoose = require('mongoose');
// @ts-ignore
const MongoClient = require('mongodb').MongoClient;
// @ts-ignore
const assert = require('assert');


export class MongoDBService {

	dbName = 'user-admin';
	private __url =  `mongodb://localhost:27017/${this.dbName}`;



	ifAllUserDataIsProvided_saveUser(req, save) {

	//	let userObject = getUserObject(req);

	//	save(userObject);
	}


	getUserManipulator(req, res, viewName) {
		return function (users) {
			users.findOne(
				{firstName: '', email: ''},
				function (err, doc) {
					assert.equal(null, err);
					// do something.
				}
			);
		};
	}


	manipulateCollection(manipulator) {
		MongoClient.connect(
			this.__url, {useNewUrlParser: true},

			function (err, client) { // client is instance of MongoClient
				assert.equal(null, err);

				const db = client.db();
				const users = db.collection('users');

				manipulator(users);

				client.close();
			}
		);
	}




}



/**********************

	manipulateCollection((users) => {
		let result = users.find();
		result.toArray((err, docs) => {
			assert.equal(null, err);
			res.render('user-manager', {
				title: 'Users',
				users: docs,
				sortOrder: 1
			});
		});
	});


	manipulateCollection((users) => {
		let result = users.find({}).sort(sortObject);
		result.toArray((err, docs) => {
			assert.equal(null, err);
		});
	});


	manipulateCollection((users) => {
		users.deleteOne(
			{firstName: '',  email: ''},
			function (err, r) {
				assert.equal(null, err);
				assert.equal(1, r.deletedCount);
			}
		);
	});


	ifAllUserDataIsProvided_saveUser(req, (modifiedUser) => {
		manipulateCollection((users) => {
			users.updateOne(
				{
					lastName: req.body.originalLastName,
					firstName: req.body.originalFirstName,
					email: req.body.originalEmail
				},
				{$set: modifiedUser}
			);
		});
	});
	

	ifAllUserDataIsProvided_saveUser(req, (newUser) => {
		manipulateCollection((users) => {
			users.insertOne(newUser, function (err, r) {
				assert.equal(null, err);
				assert.equal(1, r.insertedCount);
			});
		});
	});

***********************/
