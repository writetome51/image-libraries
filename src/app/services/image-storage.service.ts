import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CurrentUserService } from './current-user.service';
import { ImagesRestAPIService } from './images-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class ImageStorageService {


	constructor(
		private __imagesRestApi: ImagesRestAPIService,
		private __activeUser: CurrentUserService
	) {
	}


	updateImage(): Observable<any> {
		return this.__imagesRestApi.updateImage(
			{
				email: this.__activeUser.email,
				password: this.__activeUser.password,
				libraryName: this.__activeUser.activeLibraryName,
				imageIndex: this.__activeUser.activeImageIndex,
				newValue: this.__activeUser.activeImage
			}
		);
	}


	updateLibrary(): Observable<any> {
		return this.__imagesRestApi.updateLibrary({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			libraryName: this.__activeUser.activeLibraryName,
			newValue: this.__activeUser.activeLibrary
		});
	}


}
