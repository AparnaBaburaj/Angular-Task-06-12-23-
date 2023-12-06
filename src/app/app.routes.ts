import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDComponent } from './admin-d/admin-d.component';
import { authenGuard } from './authen.guard';
import { adminGuard } from './admin.guard';
import { UserDComponent } from './user-d/user-d.component';
import { FormComponent } from './form/form.component';
import { deactivateGuard } from './deactivate.guard';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    {
      path: 'admin-dashboard',
      component: AdminDComponent,
      canActivate: [authenGuard, adminGuard]
    },
    {
      path: 'user-dashboard',
      component: UserDComponent,
      canActivate: [authenGuard]
    },
    {
      path: 'form',
      component: FormComponent,
      canDeactivate: [deactivateGuard]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
