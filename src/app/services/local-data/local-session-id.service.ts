import { Injectable } from '@angular/core';
import { LocalDataService } from './local-data.service';


@Injectable({providedIn: 'root'})

export class LocalSessionIDService extends LocalDataService {

	_key = 'lsd';


	get() {
		try {
			return super.get();
		}
		catch (error) {
			return '';
		}
	}

}
