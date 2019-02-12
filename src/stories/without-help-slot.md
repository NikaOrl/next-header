### Header can contain no environment, description, projectNameClickEmitter and no conponents in the slot

For example here you can see it without help-slot

#### Tempalte for this example looks like code below

```
<next-header
  [env]="'Predev'"
  [projectName]="'NEXT - Admin'"
  [description]="'External Science'"
>
  <div user-name-slot>
    user name and href="/" here
  </div>
  <div logout-slot>
    some buttons here
  </div>
</next-header>
```
