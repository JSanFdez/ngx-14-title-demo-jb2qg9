import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatComponent } from './concat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConcatComponent,
      },
    ]),
  ],
  declarations: [ConcatComponent],
})
export class ConcatModule {}
