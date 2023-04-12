<?php
session_start(); 
$fileName = "employee.xml";
$xmlFile = file_get_contents($fileName);
$domElement = new DOMDocument();
$domElement->preserveWhiteSpace = false;
$domElement->loadXML($xmlFile);
$elements = $domElement->getElementsByTagName("employee")->length;

if(isset($_SESSION["index"]))
{    
    $index = $_SESSION["index"] ;

}
else
{
    $index=0;
    $_SESSION["index"]=0;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST["action"] === "insert") {
        $employees = simplexml_load_file("employee.xml");
		$employee = $employees->addChild('employee');
        $employee->addChild('id', uniqid());
		$employee->addChild('name', $_POST['name']);
		$employee->addChild('email', $_POST['email']);
		$employee->addChild('phone', $_POST['phone']);
		$employee->addChild('address', $_POST['address']);
        $DOM = new DomDocument();
		$DOM->preserveWhiteSpace = false;
		$DOM->formatOutput = true;
		$DOM->loadXML($employees->asXML());
		$DOM->save("employee.xml");
		header('location: index.php');
    }
    $index = $_SESSION["index"] ;
    if ($_POST["action"] === "next" && $index < $elements-1) {
        $_SESSION["index"] ++;
    }

    if ($_POST["action"] === "prev" && $index > 0) {
        $_SESSION["index"] --;
    }
    if ($_POST["action"] === "update") {
        
        $xml = simplexml_load_file("employee.xml");

        $id = $_POST['id'];
        $employee = $xml->xpath("//employee[id='$id']")[0];
        $employee->name = $_POST['name'];
        $employee->phone = $_POST['phone'];
        $employee->address = $_POST['address'];
        $employee->email = $_POST['email'];

        $xml->asXML("employee.xml");

    }
    if ($_POST["action"] === "delete") {
        
        $xml = simplexml_load_file("employee.xml");

        $id = $_POST['id'];
        $employee = $xml->xpath("//employee[id='$id']")[0];
        unset($employee[0]);

        $xml->asXML("employee.xml");
    }
}



$index = $_SESSION["index"];
$employees = $domElement->documentElement;
$employee = @$employees->childNodes[$index];
$id = @$employee->childNodes[0]->nodeValue;
$name = @$employee->childNodes[1]->nodeValue;
$email = @$employee->childNodes[2]->nodeValue;
$phone = @$employee->childNodes[3]->nodeValue;
$address = @$employee->childNodes[4]->nodeValue;


require_once("views/form.php");