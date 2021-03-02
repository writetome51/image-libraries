import { ProcessDataTransportService } from '../process-data-transport.abstract.service';
import { InterpretGetLibrariesResultService } from './interpret-get-libraries-result.service';
import { Injectable } from '@angular/core';
import { GetUserLibrariesService } from '../get-user-libraries.service';


@Injectable({providedIn: 'root'})
export class ProcessGetLibrariesService extends ProcessDataTransportService {

	constructor(
		__getResult: GetUserLibrariesService,
		__interpretResult: InterpretGetLibrariesResultService
	) {
		super(__getResult, __interpretResult);
	}

}
