<?php 
$error="";

require_once("vendor/autoload.php");
if (!empty($_POST)){
    
    $error = formValidation();
    if(empty($error)){
        save_to_file();
        die("<h1>" .__THANK_YOU."</h1><br>" 
                    ."Your Name :" . $_POST["name"] . "<br>"
                    ."Your Email:" .$_POST["email"]. "<br>"
                    ."Your Message:" . $_POST["message"]. "<br>" 
    );
    //exit();
    
    }
}


// var_dump($_POST);
$parametetr =isset($_GET["page"]) ? $_GET["page"] : "";
if($parametetr === "contact")
{
    require_once("myPages/form.php"); 
}
else{
    require_once("myPages/login.php"); 
}


