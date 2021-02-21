import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { ImageActionMenuServicesModule } from '@thumbnail-image-container/image-action-menu_module/image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class RunTasksAfterToggleAddImageToLibraryService implements IDoThis {

	go(data: { checked: boolean }) {
		data.checked = !(data.checked);
	}

}
