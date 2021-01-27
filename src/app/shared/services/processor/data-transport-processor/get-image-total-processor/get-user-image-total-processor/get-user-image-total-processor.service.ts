import { Injectable } from '@angular/core';
import { GetUserImageTotalService } from './get-user-image-total.service';
import { GetUserImageTotalResultInterpreterService }
	from './get-user-image-total-result-interpreter/get-user-image-total-result-interpreter.service';
import { GetImageTotalProcessorService } from '../get-image-total-processor.service';


@Injectable({providedIn: 'root'})
export class GetUserImageTotalProcessorService extends GetImageTotalProcessorService {

	constructor(
		__getImageTotal: GetUserImageTotalService,
		__resultInterpreter: GetUserImageTotalResultInterpreterService
	) {
		super(__getImageTotal, __resultInterpreter);
	}

}
