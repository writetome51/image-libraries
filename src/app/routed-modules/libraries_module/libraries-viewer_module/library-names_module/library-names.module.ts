import { CommonModule } from '@angular/common';
import { LibraryNamesComponent } from './library-names.component';
import { LibraryLinksComponent } from './library-links.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		LibraryNamesComponent,
		LibraryLinksComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [LibraryNamesComponent]
})
export class LibraryNamesModule {}
