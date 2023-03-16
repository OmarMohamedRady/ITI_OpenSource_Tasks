<?php
    $id = (isset($_GET["id"]))? (int) $_GET["id"] : 0;
   
   $data = $s->get_record_by_id($id);

    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/phpLab4/Utiles/SingleDataStyle.css"  type="text/css"/>
</head>
<body>
    <div class = container >
        <div>
        <?php 
        $s =$data[0]["photo"];
        echo "<img src= images/$s width=300px height=300px >";
            ?>

        </div>
        <div class="data">
            
        
            <h1><?php echo $data[0]["product_name"]?> </h1>
            <h1><?php echo $data[0]["list_price"]?>$ </h1>
            <h1><?php echo $data[0]["units_in_stock"]?> units in stock </h1>
            <h1> Ratting : <?php echo $data[0]["rating"]?>  </h1>


        </div>
</div>
 

    
</body>
</html>