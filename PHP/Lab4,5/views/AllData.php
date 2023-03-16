<?php
 $d =($s->get_all_records_Numbers());
$current_index = isset($_GET["next"]) && is_numeric($_GET["next"]) ? (int)$_GET["next"] : 0;

$next_index = (($current_index + __RECORDS_PER_PAGE__) < $d[0]["count(*)"])? $current_index + __RECORDS_PER_PAGE__ : 0;
$prev_index = (($current_index -  __RECORDS_PER_PAGE__)>0)? ($current_index -  __RECORDS_PER_PAGE__) : 0;



  $data =$s->get_all_records_paginated(array(),$current_index);
  
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/phpLab4/Utiles/AllDataStyle.css"  type="text/css"/>
  </head>
  <body>
    <h1>SHOPPING</h1>
    <div class="container">
      <div class=header>
    <h3 class="v">ID</h3>
      <h3 class="v">ProductName</h3>
      <h3 class="v">Details</h3>
      <h3 class="v">Delete Item</h3>
    </div>
  
  
  <?php
    foreach ($data as $d)
        {
          echo "<div class= header >";
            $id = $d["id"];
            $name = $d["product_name"];

         
            
                // echo "<span>" .$v. " " ."</span>";  
               echo "<h3 class= v >$id</h3>";
               echo "<h3 class= v >$name</h3>";
            $v =$d["id"];
           echo  "<h3 class= v>";
           echo "<a href=index.php?id=$v> details</a>";
           echo "</h3>";
           echo  "<h3 class= v>";
           echo "<a href=index.php?delete=$v>Delete Item</a>";
           echo "</h3>";
            // echo "<br/><br/>";
            echo "</div>";
         }
     ?>

</div>
    <div class="data">
    <a href="<?php echo "index.php?next=".$prev_index  ?>" ><<</a>
      <a href="<?php echo "index.php?next=".$next_index  ?>" >>></a>
      <!-- <a href="/phpLab4/omar">Next</a> -->
      <!-- <a href="#">Prev</a> -->
    </div>
    
  </body>
</html>
