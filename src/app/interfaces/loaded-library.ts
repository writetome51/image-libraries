import { DBLibrary } from './db-library';
import { AppImage } from './app-image';


export interface LoadedLibrary extends DBLibrary {

	currentImage: AppImage; // image currently being viewed
	currentImageIndex: number;
	changes: object; // contains any changes not yet saved

}
