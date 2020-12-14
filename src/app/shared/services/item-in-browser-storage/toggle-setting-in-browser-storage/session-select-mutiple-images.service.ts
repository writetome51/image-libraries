import { Injectable } from '@angular/core';
import { ToggleSettingInBrowserStorageService } from './toggle-setting-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class SessionSelectMutipleImagesService extends ToggleSettingInBrowserStorageService {

	constructor() {
		super(sessionStorage, 'select-multiple');
	}

}
