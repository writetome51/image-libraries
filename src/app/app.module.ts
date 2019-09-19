import { AddImagesComponent } from './add-images/add-images.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChooseImagesFromDeviceComponent }
	from './add-images/choose-images-from-device/choose-images-from-device.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserFormComponent } from './create-user/create-user-form/create-user-form.component';
import { DeleteImageButtonComponent }
	from './library/image-list/thumbnail-image/delete-image-button/delete-image-button.component';
import { EnterImageURLComponent } from './add-images/enter-image-url/enter-image-url.component';
import { FormsModule } from '@angular/forms';
import { FullSizeImageComponent } from './image-viewer/full-size-image/full-size-image.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './library/image-list/image-list.component';
import { ImageSizeSliderComponent }
	from './library/image-size-slider/image-size-slider.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
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
import { ThumbnailImageComponent }
	from './library/image-list/thumbnail-image/thumbnail-image.component';


@NgModule({
	declarations: [
		AppComponent,
		AddImagesComponent,
		ChooseImagesFromDeviceComponent,
		CreateUserComponent,
		CreateUserFormComponent,
		DeleteImageButtonComponent,
		EnterImageURLComponent,
		FullSizeImageComponent,
		ImageListComponent,
		ImageSizeSliderComponent,
		ImageViewerComponent,
		IntroductionComponent,
		LibraryComponent,
		LibrariesComponent,
		LoginFormComponent,
		PageNotFoundComponent,
		SaveChangesComponent,
		SuccessOrErrorMessageComponent,
		ThumbnailImageComponent
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
