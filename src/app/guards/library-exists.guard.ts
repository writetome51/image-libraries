import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CurrentLibraryService } from '../services/library/current-library.service';


@Injectable({providedIn: 'root'})

export class LibraryExistsGuard implements CanActivate {

	constructor(private __currentLibrary: CurrentLibraryService) {
	}


	async canActivate(
		next: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): Promise<boolean> {
		let libraryName = next.url.toString();

		await this.__currentLibrary.set_data(libraryName);

		// Will only return true if requested library exists in db:
		return hasValue(this.__currentLibrary.data);
	}

}
