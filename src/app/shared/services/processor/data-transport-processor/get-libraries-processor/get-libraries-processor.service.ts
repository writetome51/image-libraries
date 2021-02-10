import { DataTransportProcessorService } from '../data-transport-processor.service';
import { GetLibrariesResultInterpreterService } from './get-libraries-result-interpreter.service';
import { Injectable } from '@angular/core';
import { GetUserLibrariesService } from '../../../get-user-libraries.service';


@Injectable({providedIn: 'root'})
export class GetLibrariesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetUserLibrariesService,
		__resultInterpreter: GetLibrariesResultInterpreterService
	) {
		super(__getResult, __resultInterpreter);
	}

}
