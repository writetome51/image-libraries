import { FileReaderService } from './file-reader.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class DataURLFileReaderService extends FileReaderService {

	constructor() {
		super('readAsDataURL');
	}

}
