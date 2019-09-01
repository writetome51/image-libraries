import { Injectable } from '@angular/core';
import { LibraryImage } from '../../types/library-image';
import { Library } from '../../types/library';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	password = '';
	newPassword = '';
	email = '';
	newEmail = '';
	activeLibraryName = '';
	activeLibrary: Library;
	activeImageIndex: number;
	activeImage: LibraryImage;

}
