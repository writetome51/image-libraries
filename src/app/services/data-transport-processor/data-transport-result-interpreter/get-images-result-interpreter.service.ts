import { Injectable } from '@angular/core';
import { DataTransportResultInterpreterService } from './data-transport-result-interpreter.service';
import { RunTasksNeededAfterSuccessfulGettingImagesService }
	// tslint:disable-next-line:max-line-length
	from './run-tasks-needed-after-successful-result/get/run-tasks-needed-after-successful-getting-images.service';
import { GetImagesResultCheckService }
	from './data-transport-result-check/get-images-result-check.service';


@Injectable({providedIn: 'root'})

export class GetImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getImagesResultCheck: GetImagesResultCheckService,
		__runTasksNeededAfterSuccessfulResult: RunTasksNeededAfterSuccessfulGettingImagesService
	) {
		super(__getImagesResultCheck, __runTasksNeededAfterSuccessfulResult);
	}

}
