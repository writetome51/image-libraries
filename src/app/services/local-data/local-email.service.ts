import { Injectable } from '@angular/core';
import { LocalDataService } from './local-data.service';


@Injectable({providedIn: 'root'})

export class LocalEmailService extends LocalDataService {

	_key = 'eml';

}
