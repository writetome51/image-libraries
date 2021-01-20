import { DataTransportProcessorService } from '../data-transport-processor.service';
import { DBLibrary } from '@interfaces/db-library.interface';
import { GetLibrariesResultInterpreterService } from './get-libraries-result-interpreter.service';
import { Injectable } from '@angular/core';
import { GetUserLibrariesService } from '../../../get-user-libraries.service';


@Injectable({providedIn: 'root'})
export class GetLibrariesProcessorService extends DataTransportProcessorService {

	constructor(
		private __getUsersLibraries: GetUserLibrariesService,
		__getLibrariesResultInterpreter: GetLibrariesResultInterpreterService
	) {
		super(__getLibrariesResultInterpreter);
	}


	protected async _getResult(): Promise<DBLibrary[] | {error: {message: string}}> {
		return await this.__getUsersLibraries.go();
	}

}
