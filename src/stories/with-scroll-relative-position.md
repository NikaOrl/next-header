### Long page with a lot of content, relative position and scroll

For some pages header can have a relative position

#### Tempalte for this example looks like code below

```
<div>
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
    <div logout-slot>
      some buttons here
    </div>
  </next-header>
  some long text here
</div>
```
