<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <h1 id="title" style="color:red">Hello World! </h1>
      
      <script>
        var head2=document.getElementById("title");
        head2.addEventListener('mouseover',function() {
          head2.style.color="yellow";
        })
        head2.addEventListener('mouseout',function() {
          head2.style.color="pink";
        })
        
      </script>
  </body>
</html>
