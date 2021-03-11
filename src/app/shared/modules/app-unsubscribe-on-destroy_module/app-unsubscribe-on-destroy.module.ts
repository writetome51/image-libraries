import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUnsubscribeOnDestroyDirective } from './app-unsubscribe-on-destroy.directive';


@NgModule({
	declarations: [AppUnsubscribeOnDestroyDirective],
	imports: [CommonModule],
	exports: [AppUnsubscribeOnDestroyDirective]
})
export class AppUnsubscribeOnDestroyModule {}
