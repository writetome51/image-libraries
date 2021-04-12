import { AlertService as alert } from '@services/alert.service';
import { DBUser } from '@interfaces/db-user.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { NewUserServicesModule } from '../../../new-user-services.module';
import { RunTasksAfterLoginService } from '@run-post-success-tasks/run-tasks-after-login.service';
import { TemporaryUserInBrowserStorageService } from '@browser-storage/temporary-user-in-browser-storage.service';


@Injectable({providedIn: NewUserServicesModule})
export class RunTasksAfterCreatingUserService implements IDoThis {

	constructor(
		private __runTasksAfterLogin: RunTasksAfterLoginService,
		private __tempUserInBrowser: TemporaryUserInBrowserStorageService
	) {}


	async go() {
		let user = this.__tempUserInBrowser.get();
		this.__tempUserInBrowser.remove();

		await this.__runTasksAfterLogin.go(user);
		alert.setSuccess('Account created.  You\'re signed in.');
	}

}
