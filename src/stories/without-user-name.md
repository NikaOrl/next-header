## The header can contain no user-name-slot

### The template for this example looks like the code below

```
<next-header
  [env]="'Predev'"
  [projectName]="'NEXT - Admin'"
  [description]="'External Science'"
  (projectNameClickEmitter)="onProjectNameClick()"
>
  <div help-slot>
    some buttons here
  </div>
  <div logout-slot>
    some buttons here
  </div>
</next-header>
```
