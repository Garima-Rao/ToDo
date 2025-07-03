import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Header } from './myComponent/header/header';


export const routes: Routes = [
      { path: '', redirectTo: 'header', pathMatch: 'full' },
      {path:"header",component:Header}
];
