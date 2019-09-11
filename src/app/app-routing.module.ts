import { CreateUserComponent } from './create-user/create-user.component';
import { AddImagesComponent } from './add-images/add-images.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	/********************
	 { path: 'hero/:id',  component: HeroDetailComponent },
	 {
 		path: 'heroes',
		component: HeroListComponent,
		data: { title: 'Heroes List' }
	},
	 *******************/
	{
		path: '',
		component: IntroductionComponent,
		pathMatch: 'full'
	},
	{
		path: 'create-user',
		component: CreateUserComponent
	},
	{
		path: 'add-images',
		component: AddImagesComponent
	},
	{
		path: 'open-library',
		component: LibraryChooserComponent
	},

	// This path must come last, meaning if none of the above paths apply, do this.
	{path: '**', component: PageNotFoundComponent}
];


@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			//	{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
