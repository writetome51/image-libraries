import { Component } from '@angular/core';
import { DeleteUserFormModuleTitleData as thisModuleTitle }
	from './delete-user-form-module-title.data';
import { DeleteUserProcessorService }
	from './delete-user-processor_service/delete-user-processor.service';
import { environment } from '@environments/environment';
import { HTMLImage } from '@interfaces/html-image.interface';
import { UpdateUserModuleTitleData as parentModuleTitle } from '../update-user-module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent {

	explodingHead: HTMLImage = {
		src: environment.assets + 'head-exploding.gif',
		alt: 'Exploding head',
		width: 124
	};


	constructor(
		public processor: DeleteUserProcessorService,
		private __title: Title
	) {
		this.__title.setTitle(parentModuleTitle.data + thisModuleTitle.data);
	}

}
