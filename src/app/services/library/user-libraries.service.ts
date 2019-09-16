import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';


@Injectable({
	providedIn: 'root'
})
export class UserLibrariesService extends PublicArrayContainer {

	constructor() {
		super();
	}


}
