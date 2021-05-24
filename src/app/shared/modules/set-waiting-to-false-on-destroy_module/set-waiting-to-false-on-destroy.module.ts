import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetWaitingToFalseOnDestroyDirective }
	from './set-waiting-to-false-on-destroy.directive';


@NgModule({
	declarations: [SetWaitingToFalseOnDestroyDirective],
	imports: [CommonModule],
	exports: [SetWaitingToFalseOnDestroyDirective]
})
export class SetWaitingToFalseOnDestroyModule {}
