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
