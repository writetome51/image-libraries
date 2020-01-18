import { AppModuleRouteService } from '../app-module-route.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { CurrentLibraryService } from '../services/library/current-library.service';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';


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

		await this.__assignTo__currentLibrary(requestedLibrary);

		// Will only return true if requestedLibrary was found:
		if (hasValue(this.__currentLibrary.data)) return true;

		else return this.__redirectToLibrariesAndReturnFalse();
	}


	private async __assignTo__currentLibrary(requestedLibrary) {
		if (
			noValue(this.__currentLibrary.data)
			|| requestedLibrary !== this.__currentLibrary.name
		) {
			await this.__currentLibrary.set_data(requestedLibrary);
		}
	}


	private __redirectToLibrariesAndReturnFalse() {
		this.__router.navigate([`/${AppModuleRouteService.LibrariesModule}`]);
		return false;
	}

}
