import { AppModuleRouteService } from '../app-module-route.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { CurrentLibraryData as library } from '../data/current-library.data';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { DBLibrary } from '../interfaces/db-library';
import { LibraryVerificationStatusData as libVerificationStatus }
	from '../data/library-verification-status.data';
import { CurrentLibrarySetterService as librarySetter }
	from '../services/library/current-library-setter.service';
import { RequestedLibraryData as requestedLibrary }
	from '../data/requested-library.data';
import { LibraryStorageService } from '../services/library/library-storage.service';
import { not } from '@writetome51/not';


@Injectable({providedIn: 'root'})

export class LibraryVerificationGuard implements CanActivate {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __router: Router
	) {
	}


	async canActivate(next: ActivatedRouteSnapshot): Promise<boolean> {
		requestedLibrary.name = next.url.toString();

		await this.__loadRequestedLibrary_ifItExists(requestedLibrary.name);

		// Only return true if requested library was found:
		if (hasValue(library.data)) return true;
		else return this.__redirectToLibrariesAndReturnFalse();
	}


	private async __loadRequestedLibrary_ifItExists(requestedLibraryName): Promise<void> {
		if (noValue(library.data) || requestedLibraryName !== library.data.name) {

			libVerificationStatus.waitingForResult = true;

			let result: DBLibrary | { error: object } =
				await this.__libraryStorage.get(requestedLibraryName);

			// @ts-ignore
			if (not(result.error)) librarySetter.set(result);
			else librarySetter.unset(); // because library wasn't found.

			libVerificationStatus.waitingForResult = false;
		}
	}


	private __redirectToLibrariesAndReturnFalse() {
		this.__router.navigate([`/${AppModuleRouteService.LibrariesModule}`]);
		return false;
	}

}