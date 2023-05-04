import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'news',
    title: 'Breaking News',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule)
    
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule)
  },
  {
    path: 'concat',
    title: 'Concat Us',
    loadChildren: () => import('./concat/concat.module').then((m) => m.ConcatModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }