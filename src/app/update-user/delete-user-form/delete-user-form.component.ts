import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'delete-user-form',
	templateUrl: './delete-user-form.component.html',
	styles: ['.warning-text { color: red; font-weight: bold; }']
})
export class DeleteUserFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	tonto = {
		src: '../../../assets/tonto.png',
		width: 200,
		height: 615
	};

}
