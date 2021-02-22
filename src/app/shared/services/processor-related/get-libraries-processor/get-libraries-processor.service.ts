import { DataTransportProcessorService } from '../data-transport-processor.abstract.service';
import { InterpretGetLibrariesResultService } from './interpret-get-libraries-result.service';
import { Injectable } from '@angular/core';
import { GetUserLibrariesService } from '../../get-user-libraries.service';


@Injectable({providedIn: 'root'})
export class GetLibrariesProcessorService extends DataTransportProcessorService {

	constructor(
		__getResult: GetUserLibrariesService,
		__interpretResult: InterpretGetLibrariesResultService
	) {
		super(__getResult, __interpretResult);
	}

}
