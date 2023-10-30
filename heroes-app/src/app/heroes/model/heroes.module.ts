import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from '../controller/heroes-routing.module';
import { MaterialModule } from '../../material/material.module';

import { HeroPageComponent } from '../views/hero-page/hero-page.component';
import { LayoutPageComponent } from '../views/layout-page/layout-page.component';
import { ListPageComponent } from '../views/list-page/list-page.component';
import { NewPageComponent } from '../views/new-page/new-page.component';
import { SearchPageComponent } from '../views/search-page/search-page.component';
import { CardComponent } from '../components/card/card.component';
import { HeroImagePipe } from '../pipes/hero-image.pipe';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,

    // Pipes
    HeroImagePipe,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
