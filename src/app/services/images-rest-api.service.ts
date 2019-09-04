import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class ImagesRestAPIService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}





}
