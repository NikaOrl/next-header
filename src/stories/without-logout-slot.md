## The header can contain no logout-slot

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
  <div user-name-slot>
    user name and href="/" here
  </div>
</next-header>
```
