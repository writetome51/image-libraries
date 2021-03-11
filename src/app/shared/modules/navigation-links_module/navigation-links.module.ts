import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinksComponent } from './navigation-links.component';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [NavigationLinksComponent],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [NavigationLinksComponent]
})
export class NavigationLinksModule {}
