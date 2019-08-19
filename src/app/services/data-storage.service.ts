import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


export class DataStorageService {


	constructor(private __restApi: RestAPIService) {
	}


	getUser(email, password): Observable<any> {
		let url = this.__restApi.getURLForGettingUser(email, password);
		return this.__restApi.get(url);
	}


	createUser(email, password): Observable<any> {

		return this.__getRequestResult(this.__http.post, this.__createUserURL, {email, password});
	}


	createLibrary(
		email, password, library: { name: string, images: any[] }
	): Observable<any> {
		return this.__getRequestResult(
			this.__http.patch, this.__createLibraryURL, {email, password, library}
		);
	}


	deleteUser(email, password): Observable<any> {
		let body = this.__getModifiedBody({email, password});
		return this.__http.delete(this.__deleteUserURL, {params: body});
	}


	deleteLibrary(email, password, libraryName): Observable<any> {
		let body = this.__getModifiedBody({email, password, libraryName});
		return this.__http.delete(this.__deleteLibraryURL, {params: body});
	}


}
