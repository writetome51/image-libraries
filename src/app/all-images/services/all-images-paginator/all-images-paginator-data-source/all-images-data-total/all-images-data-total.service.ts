import { DataTotalService } from '@app-paginator/app-paginator-data-source/data-total.service'
import { Injectable } from '@angular/core';
import { GetAllImagesTotalProcessorService } from './get-all-images-total-processor.service';


@Injectable({providedIn: 'root'})
export class AllImagesDataTotalService extends DataTotalService {

	constructor(__set_dataTotal_Processor: GetAllImagesTotalProcessorService) {
		super(__set_dataTotal_Processor);
	}

}
