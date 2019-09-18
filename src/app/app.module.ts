import { AddImagesComponent } from './add-images/add-images.component';
import { AppComponent } from './app.component';
import { AppImageComponent } from './library/image-list/app-image/app-image.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChooseImagesFromDeviceComponent }
	from './add-images/choose-images-from-device/choose-images-from-device.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserFormComponent } from './create-user/create-user-form/create-user-form.component';
import { DeleteImageButtonComponent }
	from './library/image-list/app-image/delete-image-button/delete-image-button.component';
import { EnterImageURLComponent } from './add-images/enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './library/image-list/image-list.component';
import { ImageSizeSliderComponent }
	from './library/image-size-slider/image-size-slider.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LibraryComponent } from './library/library.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { LoginFormComponent } from './introduction/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { ReArrangeableGridListModule }
	from '../reusable-modules/re-arrangeable-grid-list/re-arrangeable-grid-list.module';
import { SaveChangesComponent } from './library/save-changes/save-changes.component';
import { SuccessOrErrorMessageComponent }
	from './success-or-error-message/success-or-error-message.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';


@NgModule({
	declarations: [
		AppComponent,
		AddImagesComponent,
		AppImageComponent,
		ChooseImagesFromDeviceComponent,
		CreateUserComponent,
		CreateUserFormComponent,
		DeleteImageButtonComponent,
		EnterImageURLComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		IntroductionComponent,
		LibraryComponent,
		LibrariesComponent,
		LoginFormComponent,
		PageNotFoundComponent,
		SaveChangesComponent,
		SuccessOrErrorMessageComponent,
		ImageViewerComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReArrangeableGridListModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
