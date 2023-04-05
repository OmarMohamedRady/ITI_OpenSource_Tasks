<?php

require_once('functions.php');

$arr = ['name'=>'omar' , 'phone'=>'01236854852' , 'address'=>'montaza', 'email'=>'omar@gmail.com'];

$xmlDocs = new DOMDocument();
$xmlDocs->load("employees.xml");

createEmployee($arr, $xmlDocs);

$xmlDocs->save("employees.xml");


$employees = $xmlDocs->getElementsByTagName('employee');

$arrOfEmployees = [];

foreach ($employees as $employee) {
    $arrOfEmployees[] = $employee ;
}


var_dump(displayEmployee($arrOfEmployees[0]));