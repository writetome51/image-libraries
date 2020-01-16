import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { AppModuleRouteService } from '../app-module-route.service';


@Injectable({providedIn: 'root'})

export class LibraryExistsGuard implements CanActivate {

	constructor(
		private __currentLibrary: CurrentLibraryService,
		private __router: Router
	) {
	}


	async canActivate(
		next: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): Promise<boolean> {
		let requestedLibrary = next.url.toString();

		if (
			noValue(this.__currentLibrary.data)
			|| requestedLibrary !== this.__currentLibrary.data.name
		) {
			await this.__currentLibrary.set_data(requestedLibrary);
		}

		// Will only return true if requested library exists in db:
		if (hasValue(this.__currentLibrary.data)) return true;

		this.__router.navigate([`/${AppModuleRouteService.LibrariesModule}`]);
		return false;
	}

}
