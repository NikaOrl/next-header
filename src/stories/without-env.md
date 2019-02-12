### Header can contain no environment, description, projectNameClickEmitter and no conponents in the slot

For example here you can see it without environment, description and user-name-slot

#### Tempalte for this example looks like code below

```
<next-header
  [projectName]="'NEXT - Admin'"
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
