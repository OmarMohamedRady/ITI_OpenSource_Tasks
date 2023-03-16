
<?php

    require_once("vendor/autoload.php");
  
    $s = new MySQLHandler("items");
    if($s->connect()){

   
   

        if(isset($_GET["id"]) ){
            
            require_once("views/SingleData.php");
        }
        elseif(isset($_GET["delete"])){
                $id =(int) $_GET["delete"];
                $s->delete($id);
                require_once("views/AllData.php");
        }
        else{
            require_once("views/AllData.php");
        }
        $method = $_SERVER["REQUEST_METHOD"];
        if($method = "POST"){
            $data = json_decode(file_get_contents('php://input'), true);
             if( !empty($data)){
                $s->save($data);
                require_once("views/AllData.php");
             }
          
        }

    }

    else{
        die("Something went wrong please come back later");
    }
    
    