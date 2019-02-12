### Header can contain no environment, description, projectNameClickEmitter and no conponents in the slot

For example here you can see it without logout-slot

#### Tempalte for this example looks like code below

```
<next-header
  [env]="'Predev'"
  [projectName]="'NEXT - Admin'"
  [description]="'External Science'"
>
  <div help-slot>
    some buttons here
  </div>
  <div user-name-slot>
    user name and href="/" here
  </div>
</next-header>
```
