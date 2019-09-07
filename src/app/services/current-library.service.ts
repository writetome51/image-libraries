import { Injectable } from '@angular/core';
import { AppImage } from '../../interfaces/app-image';


@Injectable({
	providedIn: 'root'
})
export class CurrentLibraryService {


	name = ''; // name of library currently being viewed
	images: AppImage[]; // library currently being viewed

	currentImageIndex: number; // index of image currently being viewed
	currentImage: AppImage; // image currently being viewed

}
