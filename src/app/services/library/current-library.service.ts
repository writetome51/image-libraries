import { Injectable } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';


@Injectable({providedIn: 'root'})

// Represents library currently being viewed

export class CurrentLibraryService {


	static libName = '';
	static images: AppImage[] = [];
	static currentImage: AppImage; // image currently being viewed
	static currentImageIndex: number;
	static changes = {}; // only use strings as keys so you can use dot-notation.
	static dbLibrary; // library retrieved from storage.


}
