import { RenderMode, ServerRoute } from '@angular/ssr';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home/home.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
