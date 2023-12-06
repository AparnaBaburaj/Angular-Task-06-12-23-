import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { FormComponent } from './form/form.component';

export const deactivateGuard: CanDeactivateFn<FormComponent> = (component, currentRoute, currentState, nextState) => {
  component:FormComponent;
  if(component.canDeactivate()){
    return window.confirm('Are you sure want to redirect');
  }


  
  return true;
};
