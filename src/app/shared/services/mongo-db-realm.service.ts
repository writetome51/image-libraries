import { Injectable } from '@angular/core';
import * as Realm from 'realm'; // MongoDB Realm
const app = new Realm.App({id: 'serverless-functions-rhfqi'});


@Injectable({providedIn: 'root'})
export class MongoDbRealmService {


}
