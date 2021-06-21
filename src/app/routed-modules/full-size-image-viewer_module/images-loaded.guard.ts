import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { AppModulePathData as modulePath } from '@app/app-module-path.data';


@Injectable({providedIn: 'root'})
export class ImagesLoadedGuard implements CanActivate {

	constructor(
		private __router: Router,
		private __loadedImagesState: LoadedImagesStateService
	) {}


	canActivate(): boolean {
		if (this.__loadedImagesState.getImages().length > 0) return true;

		this.__router.navigate(['/' + modulePath.AllImagesModule]);
		return false;
	}

}
