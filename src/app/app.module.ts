import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { GalleriaModule } from 'primeng/galleria';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { PrimengGalleriaComponent } from './components/primeng-galleria/primeng-galleria.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    PrimengGalleriaComponent
  ],
  exports: [
    MainComponent,
    FooterComponent,
    PrimengGalleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: Aura },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
