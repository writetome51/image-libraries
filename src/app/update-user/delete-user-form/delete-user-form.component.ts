import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '@abstract-components/clear-form-on-init-and-alert-on-destroy.component';
import { DeleteUserProcessorService } from './delete-user-processor/delete-user-processor.service';
import { environment } from '@environments/environment';
import { HTMLImage } from '@interfaces/html-image';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	explodingHead: HTMLImage = {
		src: environment.assets + 'head-exploding.gif',
		alt: 'Exploding head',
		width: 124,
		height: 82,
	};


	constructor(public processor: DeleteUserProcessorService) {
		super();
	}

}
