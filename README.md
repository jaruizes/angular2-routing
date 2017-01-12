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
In the real life, navigations aren't always performed by a link. In may cases, depends on the logic, a navigation is done an even it's necessary to pass some parameters to the target page.

To do a navigation programmatically we have to use the function ```navigate()```of the Router object. In this example, we've added a new function in Feature1Component called ```gotofeature```that performs the navigation:

```typescript
gotofeature() {
    if (this.targetFeature < 1 || this.targetFeature > 3) {
      alert('You have to enter a value between 1 and 3');
      return;
    }

    let target:string = `/feature${this.targetFeature}`;
    this._router.navigate([target]);
  }
```

Then we've modified the template associated to this component (feature1.component.html) to use this new function and to navigate to other pages:

```html
<div>
  <label for="gotofeature">Go to feature number:</label>&nbsp;
  <input type="text" id="gotofeature" [(ngModel)]="targetFeature"/>

  <input type="button" value="gotofeature" (click)="gotofeature()" />
</div>
```

If we want to pass parameters to the target we have to do additional steps. 
The first one is declaring what params is expecting for each route, so we have to modify the file app.routing.ts:

```typescript
 const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'feature1', component: Feature1Component },
    { path: 'feature2/:param1', component: Feature2Component },
    { path: 'feature3', component: Feature3Component }
  ];
```

We've added ":param1" to the route for "feature2" so we are saying that this route can
receive this param.

The second step is preparing the component associated to this route to receive and manage this param. To do that, we use the [ActivatedRoute object](https://angular.io/docs/ts/latest/api/router/index/ActivatedRoute-interface.html#!#snapshot-anchor).

```typescript
  export class Feature2Component {
  
    showparam:boolean = false;
    param1:string;
  
    constructor(_route: ActivatedRoute) {
      let param:string = _route.snapshot.params['param1'];
      if (param) {
        this.showparam = true;
        this.param1 = param;
      }
    }
  }
```

And the last one is passing a parameter called 'param1' to feature2. In order to do this, we have to modified the  ```gotofeature`` function in Feature1Component to add the param:

```typescript
  gotofeature() {
    if (this.targetFeature < 1 || this.targetFeature > 3) {
      alert('You have to enter a value between 1 and 3');
      return;
    }

    let target:string = `/feature${this.targetFeature}`;
    
    // The this.targetFeature value is going to be sent as navigation param
    this._router.navigate([target, this.targetFeature]);
  }
```

We can also send the param using a static link in this way:
```html
<a [routerLink]="['/feature2','paramvalue']">Feature2</a>
```
