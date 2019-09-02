import { Injectable } from '@angular/core';
import { AppImage } from '../../types/app-image';
import { Library } from '../../types/library';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	password = '';
	newPassword = '';
	securityQuestion = {question: '', answer: ''};
	email = '';
	newEmail = '';
	activeLibraryName = '';
	activeLibrary: Library;
	activeImageIndex: number;
	activeImage: AppImage;

}
