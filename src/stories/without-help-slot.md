## The header can contain no  help-slot

### The template for this example looks like the code below

```
<next-header
  [env]="'Predev'"
  [projectName]="'NEXT - Admin'"
  [description]="'External Science'"
  (projectNameClickEmitter)="onProjectNameClick()"
>
  <div user-name-slot>
    user name and href="/" here
  </div>
  <div logout-slot>
    some buttons here
  </div>
</next-header>
```
