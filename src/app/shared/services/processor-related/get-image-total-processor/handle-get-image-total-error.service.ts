import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { HandleDataTransportErrorService }
	from '@services/processor-related/handle-error/handle-data-transport-error/handle-data-transport-error.service';


@Injectable({providedIn: 'root'})
export class HandleGetImageTotalErrorService extends HandleDataTransportErrorService {

	async go(error) {
		imageTotal.setDefault();
		await super.go(error);
	}

}
