import { Injectable } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';


@Injectable({
	providedIn: 'root'
})
export class CurrentLibraryService {


	isNew: boolean; // true if library's never been saved.
	name = ''; // name of library currently being viewed
	images: AppImage[] = []; // images in the library

	currentImageIndex: number; // index of image currently being viewed
	currentImage: AppImage; // image currently being viewed

	changes = {}; // only use strings as keys so you can use dot-notation.

}
