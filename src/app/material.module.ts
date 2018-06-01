import { NgModule } from '@angular/core';
import {
  MdcButtonModule,
  MdcIconModule,
  MdcCardModule,
  MdcIconToggleModule,
  MdcRippleModule,
  MdcTextFieldModule,
  MdcListModule,
  MdcThemeModule,
  MdcTypographyModule,
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcCardModule,
    MdcButtonModule,
    MdcIconModule,
    MdcIconToggleModule,
    MdcRippleModule,
    MdcTextFieldModule,
    MdcListModule,
    MdcThemeModule,
    MdcTypographyModule,
  ]
})
export class AppMaterialModule { }
