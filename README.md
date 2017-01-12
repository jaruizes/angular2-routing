# angular2-routing
Routing example in Angular2. 

This is an example of how configuring the routing in Angular. The application has four pages:

* Home
* Feature 1
* Feature 2
* Feature 3


### Static Navigation

There is a navigation bar with links to these pages and the user can navigate to them by clicking in the links.
This links are based on "routerLink", "router-outlet" directive and routing configuration by Routes (app.routing.ts).

To performance this navigation it's necessary to do this steps:

* Configuring navigation routes
  This is implemented in app.routing.ts file. 
  
* Including routing providers in application.
  This is implemented in app.module.ts
  
  > providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  
* Including navigation links
  This is implemented in app.component.html


### Dynamic navigation
In the real life it's necessary to pass some parameters to the target page.

The first step is declaring what params is expecting for each route, so we have to modify the file app.routing.ts:

> const routes: Routes = [
>    { path: '', component: HomeComponent },
>    { path: 'feature1', component: Feature1Component },
>    { path: 'feature2/:param1', component: Feature2Component },
>    { path: 'feature3', component: Feature3Component }
>  ];

We've added ":param1" to the route for "feature2" so we are saying that this route can
receive this param.

The second step is preparing the component associated to this route to receive and manage this param. To do that, 
