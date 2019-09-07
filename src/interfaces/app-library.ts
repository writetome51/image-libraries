import { AppImage } from './app-image';


export interface AppLibrary {
	name: string;
	images: AppImage[];
}


export interface DBLibrary extends AppLibrary {
	_id: string;
	_user_id: string;
}
