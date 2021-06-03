import { InterpretAddImagesToLibraryResultService }
	from './interpret-add-images-to-library-result_service/interpret-add-images-to-library-result.service';
import { AddImagesToLibraryService } from '@services/library/add-images-to-library.service';
import { ProcessService } from '@process/process.abstract.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class ProcessAddImagesToLibraryService extends ProcessService {

	constructor(
		__getResult: AddImagesToLibraryService,
		__interpretResult: InterpretAddImagesToLibraryResultService
	) {
		super(__getResult, __interpretResult);
	}

}
