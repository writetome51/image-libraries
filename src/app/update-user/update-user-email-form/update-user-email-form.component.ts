import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'update-user-email-form',
	templateUrl: './update-user-email-form.component.html'
})
export class UpdateUserEmailFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {
}
