<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome/index')->name('home');
Route::inertia('/about', 'about/index')->name('about');
Route::inertia('/events', 'events/index')->name('events');
Route::inertia('/services', 'services/index')->name('services');
Route::inertia('/contact', 'contact/index')->name('contact');

Route::inertia('/volunteer', 'volunteer/index')->name('volunteer');
Route::inertia('/partner', 'partner/index')->name('partner');
