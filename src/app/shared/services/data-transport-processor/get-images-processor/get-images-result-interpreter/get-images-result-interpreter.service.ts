import { DataTransportProcessResultInterpreterService }
	from '../../data-transport-process-result-interpreter/data-transport-process-result-interpreter.service';
import { GetImagesResultCheckService } from './get-images-result-check.service';
import { Injectable } from '@angular/core';
import { RunTasksAfterGettingImagesService }
	from './run-tasks-after-getting-images.service';


@Injectable({providedIn: 'root'})
export class GetImagesResultInterpreterService extends DataTransportProcessResultInterpreterService {

	constructor(
		__getImagesResultCheck: GetImagesResultCheckService,
		__runPostSuccessTasks: RunTasksAfterGettingImagesService
	) {
		super(__getImagesResultCheck, __runPostSuccessTasks);
	}

}
