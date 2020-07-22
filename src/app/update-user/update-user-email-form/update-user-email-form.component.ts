import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../shared/abstract-components/clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'update-user-email-form',
	template: `
		<update-user-email-form-inputs></update-user-email-form-inputs>
		<update-email-save-button></update-email-save-button>
	`
})
export class UpdateUserEmailFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {
}
