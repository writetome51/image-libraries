import { AppModuleRouteService } from '../app-module-route.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { CurrentLibraryService as library} from '../services/library/current-library.service';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { GetRequestedLibraryService } from '../services/library/get-requested-library.service';
import { DBLibrary } from '../interfaces/db-library';
import { LibraryVerificationStatusService as libVerificationStatus }
	from '../services/library-verification-status.service';
import { CurrentLibrarySetterService as librarySetter}
	from '../services/library/current-library-setter.service';
import { RequestedLibraryService as requestedLibrary}
	from '../services/library/requested-library.service';


@Injectable({providedIn: 'root'})

export class LibraryVerificationGuard implements CanActivate {

	constructor(
		private __getRequestedLibrary: GetRequestedLibraryService,
		private __router: Router
	) {
	}


	async canActivate(
		next: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): Promise<boolean> {
		requestedLibrary.name = next.url.toString();

		await this.__loadRequestedLibrary(requestedLibrary.name);

		// Only return true if requestedLibrary was found:
		if (hasValue(library.data)) return true;

		else return this.__redirectToLibrariesAndReturnFalse();
	}


	private async __loadRequestedLibrary(libraryName) {
		if (noValue(library.data) || libraryName !== library.data.name) {

			libVerificationStatus.waitingForResult = true;
			let result: DBLibrary | void = await this.__getRequestedLibrary.go(libraryName);

			// @ts-ignore
			if (hasValue(result)) librarySetter.set(result);
			else library.data = undefined; // because library wasn't found.

			libVerificationStatus.waitingForResult = false;
		}
	}


	private __redirectToLibrariesAndReturnFalse() {
		this.__router.navigate([`/${AppModuleRouteService.LibrariesModule}`]);
		return false;
	}

}
