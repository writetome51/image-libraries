import { DataTotalService } from './data-total.service';
import { Injectable } from '@angular/core';
import { GetAllImagesProcessorService }
	from '../../data-transport-processor/get-images/get-all-images-processor.service';

@Injectable({providedIn: 'root'})

export class DataTotalForAllImagesService extends DataTotalService {

	constructor(__get_dataTotal_Processor: GetAllImagesProcessorService) {
		super(__get_dataTotal_Processor);
	}

}
