import { Component } from '@angular/core';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';


@Component({
	selector: 'update-user-email',
	template: `<update-user-email-form></update-user-email-form>`
})
export class UpdateUserEmailComponent extends ClearAlertAndFormOnInitComponent {
}
