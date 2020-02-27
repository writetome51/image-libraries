import { AppModuleRouteService } from '../app-module-route.service';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryData as library } from '../data/runtime-state-data/library.data';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';
import { GetLibraryProcessorService }
	from '../services/data-transport-processor/get-library-processor.service';
import { PerformDataOperationService } from '../services/perform-data-operation.service';


@Injectable({providedIn: 'root'})

export class LibraryVerificationGuard implements CanActivate {

	constructor(
		private __getLibraryProcessor: GetLibraryProcessorService,
		private __router: Router
	) {
	}


	async canActivate(next: ActivatedRouteSnapshot): Promise<boolean> {
		requestedLibrary.name = next.url.toString();

		await this.__loadRequestedLibrary_ifItExists();

		if (this.__isFound(library)) return true;
		else return this.__redirectToLibrariesAndReturnFalse();
	}


	private async __loadRequestedLibrary_ifItExists(): Promise<void> {

		if (noValue(library.data) || requestedLibrary.name !== library.data.name) {
			await PerformDataOperationService.go(this.__getLibraryProcessor);
		}
	}


	private __isFound(library): boolean {
		return hasValue(library.data);
	}


	private __redirectToLibrariesAndReturnFalse() {
		this.__router.navigate([`/${AppModuleRouteService.LibrariesModule}`]);
		return false;
	}


}
