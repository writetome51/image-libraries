import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '@abstract-components/clear-form-on-init-and-alert-on-destroy.component';
import { environment } from '@environments/environment';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	headExploding = {
		src: environment.assets + 'head-exploding.gif',
		width: 124,
		height: 82,
		alt: 'Head exploding'
	};

}
