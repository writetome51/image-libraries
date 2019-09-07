import { AppLibrary } from './app-library';


export interface DBLibrary extends AppLibrary {
	_id: string;
	_user_id: string;
}
