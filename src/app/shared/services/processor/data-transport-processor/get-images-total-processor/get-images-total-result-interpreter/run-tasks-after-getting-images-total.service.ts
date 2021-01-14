import { IDoThis } from '@interfaces/i-do-this';
import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingImagesTotalService implements IDoThis {

	async go(result: { dataTotal: number }) {
		imageTotal.data = result.dataTotal;
	}

}
