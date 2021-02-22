import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { CurrentRouteService } from '@services/current-route.service';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedImagesData as selectedImages }
	from '@runtime-state-data/selected-images.data';
import { GlobalActionMenuServicesModule }
	from '@global-action-menu/global-action-menu-services.module';
import { RunTasksAfterModifyingLoadedImagesService } from '@run-post-success-tasks/run-tasks-after-modifying-loaded-images.service';


@Injectable({providedIn: GlobalActionMenuServicesModule})
export class RunTasksAfterDeletingImagesService implements IDoThis {

	constructor(
		private __runTasksAfterModifyingLoadedImages: RunTasksAfterModifyingLoadedImagesService,
		private __currentRoute: CurrentRouteService,
		private __router: Router
	) {
	}


	async go() {
		selectedImages.data.length = 0;
		alert.success = 'Image(s) deleted';
		this.__runTasksAfterModifyingLoadedImages.go();
		await this.__router.navigate([this.__currentRoute.get()]);
	}

}
