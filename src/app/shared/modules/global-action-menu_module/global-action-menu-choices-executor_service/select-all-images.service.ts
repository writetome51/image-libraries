import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageSelectorService } from '@services/image-selector.service';


@Injectable({providedIn: 'root'})
export class SelectAllImagesService implements IDoThis {

	constructor(private __imageSelector: ImageSelectorService) { }


	go() {
		this.__imageSelector.selectAll();
	}

}
