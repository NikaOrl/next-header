## Long page with a lot of content, fixed position and scroll for the whole page

For some pages the header can have a fixed position and scroll for the whole page

### The template for this example looks like the code below

```
<style>
  .fixed-header {
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
  }

  .page-body {
    margin-top: 36px;
  }
</style>

<div>
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
