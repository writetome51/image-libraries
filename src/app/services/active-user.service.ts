import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class ActiveUserService {

	password = '';
	email = '';
	activeLibraryName = '';

}
