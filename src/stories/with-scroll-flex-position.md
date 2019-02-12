## Long page with a lot of content, fixed position and scroll for the body

For some pages the header can have a fixed position and scroll will be only for the body

### The template for this example looks like the code below

```
<style>
  .container {
    height: 97vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
