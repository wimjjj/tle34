<?php

require('./dbconnect.php');

$response = [];
$data = [];
$level = 0;
$limit = 1;

if( !is_numeric($_GET['level']) ){
    $response['error'] = ['validation' => 'score not valid'];

    echo json_encode($response);
    exit;
} else {
    $level = $_GET["level"];
}

if( is_numeric($_GET['limit'])){
    $limit = mysqli_real_escape_string($conn, $_GET['limit']);
}

$level = mysqli_real_escape_string($conn, $level);

$query = "SELECT * FROM scores WHERE level = $level ORDER BY score DESC LIMIT $limit;";
$result = $conn->query($query);

$data = $result->fetch_assoc();

$response["data"] = $data;

echo json_encode($response);