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