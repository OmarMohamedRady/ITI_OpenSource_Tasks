<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="clients/style.css">
</head>
<body>
    <form action = "#" method ="post" id="inputform">
    <select name="s">
        <?php
           foreach($EGcities as $c ){

           echo "<option value='${c["id"]}' > ${c["name"]} </option>";

           }
        ?>
    </select>
            <input type="submit">
        </form>

        <?php
           $x = $_POST;
        //    var_dump($x);
           define("__API_key", "&appid=15158ff0ba8f0765d5a004b4a9a3317e");
            define("__API", "https://api.openweathermap.org/data/2.5/weather?id=");
            $cityid = $x;
            $api = __API . $cityid["s"] . __API_key;
//   $r= "https://api.openweathermap.org/data/2.5/weather?id=";
//   var_dump($r);

            // $ch = curl_init();
            // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            // curl_setopt($ch, CURLOPT_URL, $api);
            // curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            //     $data = curl_exec($ch);
            // curl_close($ch);


            $client = new \GuzzleHttp\Client();
            
                $response = $client->request("GET",$api);
            
                $data_arr = json_decode($response->getBody(),true);
            
            
              
            echo  date("l g:i A") . "</p>";
            echo "<p>" . date("jS F, Y") . "</p>";
           
            echo "<p>". 'WindSpeed :'  .($data_arr["wind"]["speed"] ) ."</p>";
            echo "<p>". 'humidity :' .($data_arr['main']['humidity'] ) ."</p>"; 
            echo "<p>". 'weather:'  . $data_arr['weather'][0]['description']





            // if(isset($_POST['city'])){

            //     // $appkey = "cd6966ae83bcefae7fa3c68e02265cbf";
            //     // define("__API_key", "&appid=${appkey}");
            //     // define("__API", "https://api.openweathermap.org/data/2.5/weather?id=");
            //     // $cityid = $_POST['city'];
            //     // $api = __API . $cityid . __API_key;
                
            // }
           ?>

</body>
</html>
