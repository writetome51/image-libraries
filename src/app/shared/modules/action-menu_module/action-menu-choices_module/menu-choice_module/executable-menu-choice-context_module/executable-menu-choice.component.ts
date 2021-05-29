import { Component, Input } from '@angular/core';
import { ClickExecuteFunctionContextDirective }
	from '@app/shared/abstract-directives/click-execute-function-context.abstract.directive';
import { hasValue } from '@writetome51/has-value-no-value';
import { LabeledMenuChoiceComponent } from '../labeled-menu-choice.abstract.component';


@Component({
	selector: 'executable-menu-choice',
	template: `
		<click-execute-function-div [context]="context" [funcArgs]="[data]">
			<div class="menu-choice-label-container">{{ label }}</div>

			<!--  Should <checkmark> be removed and placed in modules that use <action-menu> ? -->
			<!--  It may be better if this component is more generic, like an empty container. -->
			<checkmark [class.invisible]="!(checked)"></checkmark>

		</click-execute-function-div>
	`,
	styles: [`checkmark {position: relative;  top: 5px;  left: 5px;}`]
})
export class ExecutableMenuChoiceComponent extends LabeledMenuChoiceComponent {

	@Input() context: ClickExecuteFunctionContextDirective;


	get checked(): boolean {
		if (hasValue(this.data.data) && hasValue(this.data.data.checked)) {
			return this.data.data.checked;
		}
		else return false;
	}

}
