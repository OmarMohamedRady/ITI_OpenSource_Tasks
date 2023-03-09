<?php

function formValidation(){
    $name =isset($_POST["name"])? $_POST["name"] : "";
    $email =isset($_POST["email"])? $_POST["email"] : "";
    $message =isset($_POST["message"])? $_POST["message"] : "";
    if(empty($name)|| empty($email) || empty($message)){
        $error= "A field is empty";
    }
    else if(strlen($name)>__MAX_NAME_LENGTH){
        $error = "name is greater than 100 characters";
    }
    else if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        $error = "Email is not correct";
    }
    else if(strlen($message)>__MAX_MESSAGE_LENGTH){
        $error = "message is greater than 250 characters";
    }
    else{
        $error="";
    }
    return $error;
}

function remember_var($var){
    if(isset($_POST[$var]) &&!empty($_POST[$var])){
        return $_POST[$var];
    }
}

function save_to_file(){
    $fp = fopen(_SAVING_FILE,"w+");
    $today = date("F j, Y, g:i a");  
    $today=str_replace("," , " " , $today); 
    $data = implode("," , $_POST);
    $submit_ip = $_SERVER["REMOTE_ADDR"];
    $d=" $data , $today ,$submit_ip";
    fwrite($fp,$d.PHP_EOL);
    fclose($fp);
}

function read_from_file(){
    $fp = fopen(_SAVING_FILE,"r+");
    $read= fread($fp,filesize(_SAVING_FILE));
    fclose($fp);
    return $read;

}

function convert_file_to_array(){
    return file(_SAVING_FILE);
}

// function read_from_file(){
//     $fp = fopen("../"._SAVING_FILE,"r+");
//     $read= fread($fp,filesize("../"._SAVING_FILE));
//     fclose($fp);
//     return $read;

// }