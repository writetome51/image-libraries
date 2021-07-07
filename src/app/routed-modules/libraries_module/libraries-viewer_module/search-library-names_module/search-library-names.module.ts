import { ClearFieldButtonComponent } from './clear-field-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTMLImageModule } from '@html-image_module/html-image.module';
import { NgModule } from '@angular/core';
import { SearchLibraryNamesComponent }
	from './search-library-names_component/search-library-names.component';
import { SearchLibraryNamesServicesModule } from './search-library-names-services.module';


@NgModule({
	declarations: [
		SearchLibraryNamesComponent,
		ClearFieldButtonComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		SearchLibraryNamesServicesModule,
		HTMLImageModule
	],
	exports: [SearchLibraryNamesComponent]
})
export class SearchLibraryNamesModule {}
