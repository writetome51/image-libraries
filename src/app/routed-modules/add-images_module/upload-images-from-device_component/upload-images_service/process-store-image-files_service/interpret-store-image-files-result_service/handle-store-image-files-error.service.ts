import { AlertsService as alerts } from '@services/alerts.service';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleStoreImageFilesErrorService implements IDoThis {

	go(error: { message: string }) {

	}

}
