import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienceComponent } from './components/trip/experience/experience.component';
import { MapComponent } from './components/trip/map/map.component';
import { ItineraryComponent } from './components/trip/itinerary/itinerary.component';
import { AccommodationComponent } from './components/trip/accommodation/accommodation.component';
import { TransportComponent } from './components/trip/transport/transport.component';
import { TripComponent } from './components/trip/trip.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { PublicItinerariesComponent } from './components/public-itineraries/public-itineraries.component';
import { RecommendedComponent } from './components/recommended/recommended.component';

import { ProfileComponent } from './components/profile/profile.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Dashboard Route,
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'register',
    component: RegisterComponent, // Register Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'login',
    component: LoginComponent, // Login Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'trip',
    component: TripComponent, // Login Route
    canActivate: [NotAuthGuard], // User must NOT be logged in to view this route
    children:[
      { path: '', redirectTo: 'experience', pathMatch: 'full' },
      { path: 'experience', component: ExperienceComponent },
      { path: 'map', component: MapComponent },
      { path: 'itinerary', component: ItineraryComponent },
      { path: 'accommodation', component: AccommodationComponent },
      { path: 'transport', component: TransportComponent }
    ]
  },
  {
    path: 'recommended',
    component: RecommendedComponent, // Login Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'public-itineraries',
    component: PublicItinerariesComponent, // Login Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'destinations',
    component: DestinationsComponent, // Login Route
    canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'profile',
    component: ProfileComponent, // Profile Route
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'blog',
    component: BlogComponent, // Blog Route,
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent, // Edit Blog Route
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'delete-blog/:id',
    component: DeleteBlogComponent, // Delete Blog Route
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'user/:username',
    component: PublicProfileComponent, // Public Profile Route
    canActivate: [AuthGuard] // User must be logged in to view this route
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
