<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/events', 'events')->name('events');
Route::inertia('/services', 'services')->name('services');
Route::inertia('/contact', 'contact')->name('contact');

Route::inertia('/volunteer', 'contact')->name('volunteer');
Route::inertia('/partner', 'contact')->name('partner');
