### Long page with a lot of content, fixed position and scroll

For some pages header can have a fixed position

#### Tempalte for this example looks like code below

```
<style>
  .container {
    height: 97vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .fixed-header {
    display: flex;
  }

  .page-body {
    overflow-y: auto;
    flex: 1;
    position: relative;
  }
</style>

<div class="container">
  <next-header
    [env]="'Predev'"
    [projectName]="'NEXT - Admin'"
    [description]="'External Science'"
    (projectNameClickEmitter)="onProjectNameClick()"
    class="fixed-header"
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
  <div class="page-body">
    some long text here
  </div>
</div>
```
