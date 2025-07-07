import { RouterModule, Routes } from '@angular/router';
import {Home} from './pages/home/home'
import {Product} from './pages/product/product'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
export const routes: Routes = [
    { 
        path: '', 
        component: Home 
    },
    { 
        path: 'productos', 
        component: Product
    },
];
