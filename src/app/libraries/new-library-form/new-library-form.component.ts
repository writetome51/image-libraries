import { Component } from '@angular/core';


@Component({
	selector: 'new-library-form',
	template: `
		<clear-form-on-init-and-alert-on-destroy-container>
			<div class="form-container">
				<form>
					<new-library-form-input></new-library-form-input>
					<create-library-button></create-library-button>
				</form>
			</div>
		</clear-form-on-init-and-alert-on-destroy-container>
	`
})
export class NewLibraryFormComponent {
}
