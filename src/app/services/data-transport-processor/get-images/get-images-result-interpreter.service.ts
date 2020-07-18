import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService }
	from '../data-transport-result-interpreter/data-transport-result-interpreter.service';
import { RunTasksNeededAfterGettingImagesService }
	// tslint:disable-next-line:max-line-length
	from './run-tasks-needed-after-getting-images.service';
import { GetImagesResultCheckService }
	from './get-images-result-check.service';


@Injectable({providedIn: 'root'})

export class GetImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getImagesResultCheck: GetImagesResultCheckService,
		__runTasksNeededAfterSuccessfulProcess: RunTasksNeededAfterGettingImagesService
	) {
		super(__getImagesResultCheck, __runTasksNeededAfterSuccessfulProcess);
	}

}
