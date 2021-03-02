import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageActionMenuServicesModule } from '@app/shared/modules/image-action-menu/image-action-menu-services.module';


@Injectable({providedIn: ImageActionMenuServicesModule})
export class RunTasksAfterToggleAddImageToLibraryService implements IDoThis {

	go(data: { checked: boolean }) {
		data.checked = !(data.checked);
	}

}
