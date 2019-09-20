import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogShellModule } from '@e-proc/catalog/shell';
import { OrderingShellModule } from '@e-proc/ordering/shell';
import { CatalogFeatureBrowseProductsModule } from '@e-proc/catalog/feature-browse-products';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, CatalogFeatureBrowseProductsModule, CatalogShellModule, OrderingShellModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
