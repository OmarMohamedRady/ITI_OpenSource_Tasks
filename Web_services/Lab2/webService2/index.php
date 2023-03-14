<?php

require_once("./config.php");
require_once("./MySQLHandler.php");



$method = $_SERVER['REQUEST_METHOD'];
// var_dump($method);


//parse url http://localhost/web_service_labs/day2/index.php/items/5

$_DB = new MySQLHandler("products");
$_connect = $_DB->connect();



if($_connect){
    // echo "omar";
    $url = $_SERVER['REQUEST_URI'];
    $url = explode('/', $url);
    // var_dump($url);
    $resourceid = isset($url[4]) ? $url[4] : null;
    
    // var_dump($r[0]);
    
    $_connect = $_DB->connect();
    // $r1 = $_DB->get_record_by_id(15);
    
    // $resourceid=(int) $resourceid;
    if (isset($url[3]) && $url[3] !== 'products') {
        header("ERROR 404 Not Found");
        echo "ERROR 404 Not Found";
        exit();
    }
    else{
        // var_dump($url);
        // echo "hi products";
        // var_dump(intval($resourceid));
       
        $method = $_SERVER["REQUEST_METHOD"];
        switch($method){
            case 'GET':
               if($resourceid)
               {
                    $r = $_DB->get_record_by_id(intval($resourceid));
                   if ($r == NULL)
                   {
                     echo "error";
                   }
                   else{
                        $r1 = json_encode($r);
                        echo $r1;
                        $_connect = $_DB->connect();
                   }

               }else{
                    $r1=$_DB->get_data(); 
                    $r1 = json_encode($r1);  
                    echo $r1; 
                    $_connect = $_DB->connect();
               }
               break;
            case 'POST' :
                 $data = json_decode(file_get_contents('php://input'), true);
                $_DB->save($data);
                break;

            case 'PUT' :
                if($resourceid)
                {
                    $id =$resourceid;
                   $data = json_decode(file_get_contents('php://input'), true);
                   $_DB->update($data,$id);
                }
                else{
                    echo "no element";
                }
                   break;
                
            case 'DELETE' :
                    if($resourceid)
                    {
                        $id =intval($resourceid);
                       
                       $_DB->delete($id);
                    }
                    else{
                        echo "no element";
                    }
                       break;


        }
    }
}

else{
    $response = ["error" => "database Not connected."];
    http_response_code(500);
    header('Content-Type: application/json');
}?>
