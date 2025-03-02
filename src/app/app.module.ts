import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PrimengGalleriaComponent } from './shared/components/primeng-galleria/primeng-galleria.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { InfoTabComponent } from './components/info-tab/info-tab.component';
import { CountdownComponent } from './shared/components/countdown/countdown.component';
import { RouterOutlet } from '@angular/router';
import { DresscodeDialogComponent } from './components/dialogs/dresscode-dialog/dresscode-dialog.component';
import { PrepareDialogComponent } from './components/dialogs/prepare-dialog/prepare-dialog.component';
import { RulesDialogComponent } from './components/dialogs/rules-dialog/rules-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    PrimengGalleriaComponent,
    InfoTabComponent,
    CountdownComponent,
    DresscodeDialogComponent,
    PrepareDialogComponent,
    RulesDialogComponent,
  ],
  exports: [
    FooterComponent,
    PrimengGalleriaComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDialogModule,
    GalleriaModule,
    LightgalleryModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: Aura },
    }),
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
