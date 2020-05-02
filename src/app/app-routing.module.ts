import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import {AdminGuard} from '../app/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // redirectTo: '/home',
    //pathMatch: 'full',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        // component: HomeComponent
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],//activate routes by guards
        //component: ContactComponent
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        //component: ProductsComponent
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      }/*,
      {
        path: 'products/:id',
        canActivate: [AdminGuard],
        component: ProductDetailComponent
      }*/
    ]
  },

  {
    path: 'demo',
    canActivate: [AdminGuard],
    //component: DemoComponent
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: '**',
    //component: PageNotFoundComponent
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules //lazy loading
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
