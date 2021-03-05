import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';
import { HandleDbOperationErrorService }
	from '@handle-db-operation-error_service/handle-db-operation-error.service';


@Injectable({providedIn: 'root'})
export class HandleGetUserImageTotalErrorService extends HandleDbOperationErrorService {

	async go(error) {
		imageTotal.setDefault();
		await super.go(error);
	}

}
