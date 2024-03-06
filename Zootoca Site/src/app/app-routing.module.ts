import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './modules/home/home.module';
import { ServiceDetailComponent } from './pages/services/service-detail/service-detail.component';


const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) },
  { path: 'team', loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule) },
  { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'shop', loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule) },
  { path: 'other', loadChildren: () => import('./modules/other/other.module').then(m => m.OtherModule) },
  { path: 'services/service-detail', component: ServiceDetailComponent },
];

@NgModule({
//  imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
