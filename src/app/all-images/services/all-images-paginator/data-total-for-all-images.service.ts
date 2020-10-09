import { DataTotalService } from '@services/app-paginator/data-total.service';
import { GetAllImagesProcessorService } from './get-all-images-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class DataTotalForAllImagesService extends DataTotalService {

	constructor(__set_dataTotal_Processor: GetAllImagesProcessorService) {
		super(__set_dataTotal_Processor);
	}

}
