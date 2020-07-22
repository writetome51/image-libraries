import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../../shared/abstract-components/clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'update-user-password-form',
	template: `
		<update-user-password-form-inputs></update-user-password-form-inputs>
		<update-password-save-button></update-password-save-button>
	`
})
export class UpdateUserPasswordFormComponent extends ClearFormOnInitAndAlertOnDestroyComponent {
}
