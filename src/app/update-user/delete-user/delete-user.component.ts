import { Component } from '@angular/core';
import { ClearAlertAndFormOnInitComponent } from '../../clear-alert-and-form-on-init.component';


@Component({
	selector: 'delete-user',
	template: `<delete-user-form></delete-user-form>`
})
export class DeleteUserComponent extends ClearAlertAndFormOnInitComponent {
}
