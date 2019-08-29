import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroduceComponent } from './introduce/introduce.component';
// import { IntroduceComponent } from './introduce/introduce.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    data: {
      title: 'home'
    }
  },
  // {
  //   path: 'default',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'default'
  //   },
  //   children: [
  //     {
  //       path: 'introduce',
  //       loadChildren: () => import ('./introduce/introduce.component').then(m => m.IntroduceComponent)
  //     }
  //   ]
  // }
  {
    path: 'introduce',
    component: IntroduceComponent,
    data: {
      title: 'default'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
