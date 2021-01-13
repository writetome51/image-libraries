import { Injectable } from '@angular/core';
import { ToggleSettingInBrowserStorageService } from './toggle-setting-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class ZoomOnScrollSettingService extends ToggleSettingInBrowserStorageService {

	constructor() {
		super(localStorage, 'zoomOnScroll');
	}

}
