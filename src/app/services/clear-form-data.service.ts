import { CurrentUserService as currentUser } from './user/current-user.service';
import { NewLibraryService as newLibrary } from './library/new-library.service';


export class ClearFormDataService { // implements IDoThis

	static go(): void {
		currentUser.unset();
		newLibrary.name = '';
	}

}
