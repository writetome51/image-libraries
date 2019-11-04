import { Injectable } from '@angular/core';
import { LocalSessionIDService } from './authentication/local-session-id.service';
import { Router } from '@angular/router';
import { SingleActionService } from '../../interfaces/single-action-service';


@Injectable({
	providedIn: 'root'
})
export class RemoveSessionIDAndRedirectHomeService implements SingleActionService {

	constructor(
		private __sessionIDLocalStorage: LocalSessionIDService,
		private __router: Router
	) {
	}


	async go() {
		this.__sessionIDLocalStorage.remove();
		await this.__router.navigate(['/']); // logged-out homepage.
	}

}
