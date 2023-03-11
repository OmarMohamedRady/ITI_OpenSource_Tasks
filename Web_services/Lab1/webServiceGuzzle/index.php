<?php
require("./vendor/autoload.php");
$allCities= json_decode(file_get_contents("./clients/city.list.json"),true);
$EGcities = [];

foreach($allCities as $city){
    if($city["country"] == "EG"){
        $EGcities[] = $city;
    }
}

// var_dump($EGcities);
   require_once("clients/home.php");
?>


<?php


?>