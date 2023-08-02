<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2 id="head1">Heading2</h2>
    <h3 id="head2">Heading3</h3>

    <script>
        var head2 = document.getElementById("head1");
        var head3 = document.getElementById("head2");
        head2.addEventListener('click',function(){
            alert("heading1 is clicked.");
        })
        head3.addEventListener('click',function(){
            head3.innerHTML = "Heading Heading";
        })
    </script>
</body>
</html>