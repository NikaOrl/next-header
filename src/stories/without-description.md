## The header can contain no description

### The template for this example looks like the code below

```
<next-header
  [env]="'Predev'"
  [projectName]="'NEXT - Admin'"
  (projectNameClickEmitter)="onProjectNameClick()"
>
  <div help-slot>
    some buttons here
  </div>
  <div user-name-slot>
    user name and href="/" here
  </div>
  <div logout-slot>
    some buttons here
  </div>
</next-header>
```
