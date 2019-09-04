import { Injectable } from '@angular/core';
import { AppImage } from '../../types/app-image';
import { Library } from '../../types/library';


@Injectable({
	providedIn: 'root'
})
export class CurrentLibraryService {


	name = ''; // name of library currently being viewed
	images: Library; // library currently being viewed

	currentImageIndex: number; // index of image currently being viewed
	currentImage: AppImage; // image currently being viewed

}
