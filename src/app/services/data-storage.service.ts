import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


export class DataStorageService {


	constructor(private __restApi: RestAPIService) {
	}


	getUser(email, password): Observable<any> {
		return this.__restApi.getUser(email, password);
	}


	createUser(email, password): Observable<any> {
		let url = this.__restApi.createUserURL;
		return this.__restApi.getRequestResult('post', url, {email, password});
	}


	createLibrary(email, password, libraryName): Observable<any> {
		let url = this.__restApi.createLibraryURL;
		return this.__restApi.getRequestResult('patch', url, {email, password, libraryName});
	}


	deleteUser(email, password): Observable<any> {
		let url = this.__restApi.deleteUserURL;
		return this.__restApi.getRequestResult('delete', url, {email, password});
	}


	deleteLibrary(email, password, libraryName): Observable<any> {
		let url = this.__restApi.deleteLibraryURL;
		return this.__restApi.getRequestResult('delete', url, {email, password, libraryName});
	}


}
