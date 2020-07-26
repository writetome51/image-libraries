import { AppModuleRoutesData } from '../../app-module-routes.data';
import { IDoThis } from '@shared/interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})

export class RedirectToLoggedInHomeService implements IDoThis {

	constructor(private __router: Router) {
	}


	async go() {
		await this.__router.navigate([`/${AppModuleRoutesData.LibrariesModule}`]);
	}

}
