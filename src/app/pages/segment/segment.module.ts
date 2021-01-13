// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SegmentPageRoutingModule } from './segment-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { SegmentPage } from './segment.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {}
