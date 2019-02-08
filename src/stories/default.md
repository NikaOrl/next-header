## Project setup

```
npm i next-header
```

## Basic usage example

### Add module into your app

```
import { NextHeaderModule } from 'next-header';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [..., NextHeaderModule],
  providers: []
})
export class AppModule {
}

```

### Add murkup to the template file

```
<next-header
  [env]="env"
  [projectName]="projectName"
  [description]="description"
  (projectNameClickEmitter)="onProjectNameClick()"
>
  <div slot-help>
    slot-help content
  </div>
  <div slot-user-name>
    slot-user-name content
  </div>
  <div slot-logout>
    slot-logout content
  </div>
</next-header>
```

### Tempalte for this example looks like code below

```


```
