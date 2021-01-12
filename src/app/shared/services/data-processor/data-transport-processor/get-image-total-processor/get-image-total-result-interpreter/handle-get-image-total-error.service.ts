import { HandleDataTransportProcessErrorService }
	from '@handle-data-transport-process-error/handle-data-transport-process-error.service';
import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class HandleGetImageTotalErrorService extends HandleDataTransportProcessErrorService {

	async go(error) {
		imageTotal.data = 0;
		await super.go(error);
	}

}
