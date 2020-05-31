import { DBLibrary } from './db-library';
import { DBImage } from './db-image';


export interface LoadedLibrary extends DBLibrary {

	currentImage: DBImage; // image currently being viewed

	currentImageIndex: number;

}
