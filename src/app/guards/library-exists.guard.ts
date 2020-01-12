import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LibraryNameService as libraryName } from '../services/library/library-name.service';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({providedIn: 'root'})

export class LibraryExistsGuard implements CanActivate {

	constructor(
		private __router: Router,
		private __currentLibrary: CurrentLibraryService
	) {
	}


	async canActivate(
		next: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): Promise<boolean> {
		let lastItemInRoute = next.url.toString();
		console.log(lastItemInRoute);
		libraryName.data = lastItemInRoute;

		await this.__currentLibrary.set_data();

		// Will only return true if requested library exists in db:
		return hasValue(this.__currentLibrary.data);
	}

}
