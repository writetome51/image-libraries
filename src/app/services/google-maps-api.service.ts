import { Injectable } from '@angular/core';
import { GoogleMapsApiKeyData as apiKey } from '../../data-structures/read-only-data/google-maps-api-key.data';


@Injectable({providedIn: 'root'})

export class GoogleMapsApiService {

	api = `https://www.google.com/maps/embed/v1/MODE?key=${apiKey.data}&parameters`;


	constructor() {
	}


}
