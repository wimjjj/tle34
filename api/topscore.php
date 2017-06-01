<?php

require('./dbconnect.php');

$response = [];
$data = [];
$level = 0;

if( !is_numeric($_GET['level']) ){
    $response['error'] = ['validation' => 'score not valid'];

    echo json_encode($response);
    exit;
} else {
    $level = $_GET["level"];
}

$query = "SELECT * FROM scores WHERE level = $level ORDER BY score DESC LIMIT 1;";
$result = $conn->query($query);

$data = $result->fetch_assoc();

$response["data"] = $data;

echo json_encode($response);