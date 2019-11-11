import { Component } from '@angular/core';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';


@Component({
	selector: 'update-user-password',
	template: `<update-user-password-form></update-user-password-form>`
})
export class UpdateUserPasswordComponent extends ClearAlertAndFormOnInitComponent {
}
