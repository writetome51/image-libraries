import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


export class DataStorageService {


	constructor(private __restApi: RestAPIService) {
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		return this.__restApi.getUser(params);
	}


	createUser(params: { email: string, password: string }): Observable<any> {
		return this.__restApi.createUser(params);
	}


	deleteUser(params: { email: string, password: string }): Observable<any> {
		return this.__restApi.deleteUser(params);
	}


	changePassword(
		params: { email: string, password: string, newPassword: string }
	): Observable<any> {
		return this.__restApi.changePassword(params);
	}


	deleteLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {
		return this.__restApi.deleteLibrary(params);
	}


	createLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {
		return this.__restApi.createLibrary(params);
	}


	updateLibrary(
		params: { email: string, password: string, libraryName: string, library: any[] }
	): Observable<any> {
		return this.__restApi.updateLibrary(params);
	}


}
