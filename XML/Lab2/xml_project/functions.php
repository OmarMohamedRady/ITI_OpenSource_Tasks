<?php

function createEmployee($arr, $xmlDocument)
{
    $root = $xmlDocument->documentElement;
    $employee = $xmlDocument->createElement('employee', ' ');

    $name = $xmlDocument->createElement('name', $arr['name']);
    $phone = $xmlDocument->createElement('phone', $arr['phone']);
    $address = $xmlDocument->createElement('address', $arr['address']);
    $email = $xmlDocument->createElement('email', $arr['email']);

    $employee->appendChild($name);
    $employee->appendChild($phone);
    $employee->appendChild($address);
    $employee->appendChild($email);

    $root->appendChild($employee);
}

function displayEmployee($employee)
{
    $arr = [];

    $arr['name'] = $employee->getElementsByTagName('name')->item(0)->nodeValue;
    $arr['phone'] = $employee->getElementsByTagName('phone')->item(0)->nodeValue;
    $arr['address'] = $employee->getElementsByTagName('address')->item(0)->nodeValue;
    $arr['email'] = $employee->getElementsByTagName('email')->item(0)->nodeValue;

    return $arr;
}