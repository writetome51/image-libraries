import { Injectable } from '@angular/core';
import { LocalSessionIDService } from './local-data/local-session-id.service';
import { Router } from '@angular/router';
import { IDoThis } from '../../interfaces/i-do-this';
import { LocalEmailService } from './local-data/local-email.service';


@Injectable({providedIn: 'root'})

export class RemoveLocalDataAndRedirectHomeService implements IDoThis {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __localEmail:LocalEmailService,
		private __router: Router
	) {
	}


	async go() {
		this.__localSessionID.remove();
		this.__localEmail.remove();
		await this.__router.navigate(['/']); // logged-out homepage.
	}

}
