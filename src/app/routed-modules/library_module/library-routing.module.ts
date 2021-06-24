import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { LibraryComponent } from './library.component';
import { LibraryModulePathData as modulePath } from './library-module-path.data';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

	{	// lazy-loaded module
		path: modulePath.FullSizeImageViewerModule,
		loadChildren: () => import('../full-size-image-viewer_module/full-size-image-viewer.module')
			.then(mod => mod.FullSizeImageViewerModule)
	},

	{
		path: modulePath.LibraryComponent,
		component: LibraryComponent,
		canActivate: [AuthenticatedGuard]
	},

	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/'
	},

	// Wildcard path must come last, meaning if none of the above paths apply, do this.
	{path: '**', redirectTo: '/'}
];


@NgModule({
	imports: [
		RouterModule.forChild(
			routes,
			//	{enableTracing: true} // <-- debugging purposes only
		)
	],
	exports: [RouterModule]
})
export class LibraryRoutingModule {}
