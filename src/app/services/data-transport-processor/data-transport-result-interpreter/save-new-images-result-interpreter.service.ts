import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';


@Injectable({providedIn: 'root'})

export class SaveNewImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__saveNewImagesResultCheck,
		__saveNewImagesResultProcessor
	) {
		super(__saveNewImagesResultCheck, __saveNewImagesResultProcessor);
	}

}
