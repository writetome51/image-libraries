import { Injectable } from '@angular/core';
import { ToggleSettingInBrowserStorageService }
	from './toggle-setting-in-browser-storage.abstract.service';


@Injectable({providedIn: 'root'})
export class EnableImageSelectionSettingService extends ToggleSettingInBrowserStorageService {

	constructor() { super(sessionStorage, 'enable-selection'); }

}
