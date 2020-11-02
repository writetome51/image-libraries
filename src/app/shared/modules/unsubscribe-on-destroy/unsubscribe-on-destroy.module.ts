import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribeOnDestroyDirective } from './unsubscribe-on-destroy.directive';


@NgModule({
	declarations: [UnsubscribeOnDestroyDirective],
	imports: [CommonModule],
	exports: [UnsubscribeOnDestroyDirective]
})
export class UnsubscribeOnDestroyModule {
}
