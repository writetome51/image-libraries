import { DataTransportResultInterpreterService }
	from '../../data-transport-result-interpreter/data-transport-result-interpreter.service';
import { GetImagesResultCheckService } from './get-images-result-check.service';
import { Injectable } from '@angular/core';
import { RunTasksNeededAfterGettingImagesService }
	from './run-tasks-needed-after-getting-images.service';


@Injectable({providedIn: 'root'})

export class GetImagesResultInterpreterService extends DataTransportResultInterpreterService {

	constructor(
		__getImagesResultCheck: GetImagesResultCheckService,
		__runPostSuccessTasks: RunTasksNeededAfterGettingImagesService
	) {
		super(__getImagesResultCheck, __runPostSuccessTasks);
	}

}
