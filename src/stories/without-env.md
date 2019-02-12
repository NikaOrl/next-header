## The header can contain no environment

### The template for this example looks like the code below

```
<next-header
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
  <div logout-slot>
    some buttons here
  </div>
</next-header>
```
