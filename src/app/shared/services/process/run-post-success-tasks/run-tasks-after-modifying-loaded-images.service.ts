import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LoadedImagesStateService }
	from '@services/loaded-image-state_service/loaded-images-state.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterModifyingLoadedImagesService implements IDoThis {

	constructor(private __loadedImageState: LoadedImagesStateService) {}


	go(): void {
		this.__emptyLoadedImageCacheSoItWillBeForcedToRefresh();
	}


	private __emptyLoadedImageCacheSoItWillBeForcedToRefresh() {
		this.__loadedImageState.setDefault();
	}

}
