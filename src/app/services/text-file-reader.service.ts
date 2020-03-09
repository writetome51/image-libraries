import { FileReaderService } from './file-reader.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class TextFileReaderService extends FileReaderService {

	constructor() {
		super('readAsText');
	}

}
