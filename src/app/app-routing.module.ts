import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import { LibraryChooserComponent } from './library-chooser/library-chooser.component';


const routes: Routes = [

//	{ path: 'crisis-center',  component: CrisisListComponent },
//  { path: 'hero/:id',  component: HeroDetailComponent },
//  	{
// 		path: 'heroes',
//		component: HeroListComponent,
//		data: { title: 'Heroes List' }
//	},
	{
		path: '',
		component: IntroductionComponent,
		pathMatch: 'full'
	},
	{
		path: 'choose-images',
		component: ImageChooserComponent
	},
	{
		path: 'open-library',
		component: LibraryChooserComponent
	},
	{path: '**', component: PageNotFoundComponent}
];


@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
