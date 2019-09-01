import { Injectable } from '@angular/core';
import { LibraryImage } from '../../types/library-image';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	password = '';
	newPassword = '';
	email = '';
	newEmail = '';
	activeLibraryName = '';
	activeImageIndex: number;
	activeImage: LibraryImage;

}
