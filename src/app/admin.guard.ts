import { Router, CanActivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Injectable, inject } from '@angular/core';


export const adminGuard: CanActivateFn = (route, state) => {
  const service=inject(AuthenticationService);
const router=inject(Router);

  return true;


 /*
  if(service.isAdmin.value){
    return true;
   // router.navigate(['/admin-dashboard'])
  }
  else{
    alert("You don't have a pemission");
    router.navigate(['/user-dashboard'])
    return false;
  }
*/
  
};
