import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
 import { Router } from '@angular/router';

export const loadifGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('status'); 
  const router = inject(Router); 
  if (token) { return true; } 
  else { router.navigate(['']); return false; }
};
