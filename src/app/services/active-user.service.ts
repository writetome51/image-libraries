import { Injectable } from '@angular/core';
import { AppImage } from '../../types/app-image';
import { Library } from '../../types/library';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	// If user doesn't exist yet in db, this is bound to 'password' text input.
	password = '';

	newPassword = ''; // bound to 'new password' text input

	// users create this to allow them to reset their password later
	securityQuestion = {question: '', answer: ''};

	// If user doesn't exist yet in db, this is bound to 'email' text input
	email = '';
	newEmail = ''; // bound to 'new email' text input
	activeLibraryName = ''; // name of library currently being viewed
	activeLibrary: Library; // library currently being viewed
	activeImageIndex: number; // index of image currently being viewed
	activeImage: AppImage; // image currently being viewed

}
