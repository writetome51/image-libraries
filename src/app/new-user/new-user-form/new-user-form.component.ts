import { Component } from '@angular/core';


@Component({
	selector: 'new-user-form',
	template: `
		<div class="form-container">

			<form>

				<new-user-form-inputs></new-user-form-inputs>

				<create-user-button></create-user-button>

			</form>

		</div>
	`
})
export class NewUserFormComponent {
}
