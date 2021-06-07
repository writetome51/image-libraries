import { Component } from '@angular/core';
import { Alert } from '@interfaces/alert.interface';
import { HasDataInputDirective }
	from '@app/shared/abstract-directives/has-data-input.abstract.directive';


@Component({
	selector: 'app-alert',
	template: `
		<div class="alert app-alert static-block-overlay"
			 [class.alert-danger]="data.isError"
			 [class.alert-success]="!(data.isError)"
			 [class.alert-dismissible]="true"
		>
			<strong>{{data.message}}</strong>
		</div>
	`,
	styles: [`.app-alert { margin: auto; width: 96%; }`]
})
export class AppAlertComponent extends HasDataInputDirective<Alert> {}
