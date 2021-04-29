import { AlertsService as alerts } from '@services/alerts.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UpdateUserServicesModule } from '../../../update-user-services.module';
import { Router } from '@angular/router';


@Injectable({providedIn: UpdateUserServicesModule})
export class RunTasksAfterDeletingUserService implements IDoThis {

	constructor(private __router: Router) {}


	async go() {
		await this.__router.navigate(['/']);
		alerts.setSuccess('Account deleted');
	}

}
