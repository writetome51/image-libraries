import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


export class DataStorageService {


	constructor(private __restApi: RestAPIService) {
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		return this.__restApi.getUser(params);
	}


	createUser(params: { email: string, password: string }): Observable<any> {
		let url = this.__restApi.createUserURL;
		return this.__restApi.getRequestResult('post', url, params);
	}


	changePassword(params: { email: string, password: string, newPassword: string }): Observable<any> {
		let url = this.__restApi.changePasswordURL;
		return this.__restApi.getRequestResult('patch', url, params);
	}


	deleteUser(params: { email: string, password: string }): Observable<any> {
		let url = this.__restApi.deleteUserURL;
		url += this.__restApi.getRequiredURLQuery(params);
		return this.__restApi.getRequestResult('delete', url);
	}


	deleteLibrary(params: { email: string, password: string, libraryName: string }): Observable<any> {
		let url = this.__restApi.deleteLibraryURL;
		url += this.__restApi.getRequiredURLQuery(params);
		return this.__restApi.getRequestResult('delete', url);
	}


	createLibrary(params: { email: string, password: string, libraryName: string }): Observable<any> {
		let url = this.__restApi.createLibraryURL;
		return this.__restApi.getRequestResult('patch', url, params);
	}


	updateLibrary(
		params: { email: string, password: string, libraryName: string, library: object }
	): Observable<any> {
		let url = this.__restApi.updateLibraryURL;
		return this.__restApi.getRequestResult('patch', url, params);
	}


}
