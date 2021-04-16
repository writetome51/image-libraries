import { AlertService as alert } from '@services/alert.service';
import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class HandleStoreImageFilesErrorService implements IDoThis {

	go(error: { message: string }) {

	}

}
