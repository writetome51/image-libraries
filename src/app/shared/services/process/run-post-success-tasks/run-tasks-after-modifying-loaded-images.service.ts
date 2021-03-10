import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LoadedImageStateService }
	from '@services/loaded-image-state_service/loaded-image-state.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterModifyingLoadedImagesService implements IDoThis {

	constructor(private __loadedImageState: LoadedImageStateService) {}


	go(): void {
		this.__emptyLoadedImageCacheSoItWillBeForcedToRefresh();
	}


	private __emptyLoadedImageCacheSoItWillBeForcedToRefresh() {
		this.__loadedImageState.setDefault();
	}

}
