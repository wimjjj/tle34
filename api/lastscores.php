<?php

require('./dbconnect.php');

$response = [];
$data = [];

for($i = 1; $i < 5; $i++){
    $data[] = getLastScoreForLevel($conn, $i);
}

$response["data"] = $data;

echo json_encode($response);
exit;

function getLastScoreForLevel($conn, $level){
    $query = "SELECT * FROM scores WHERE level = $level ORDER BY date DESC LIMIT 1";
    $result = $conn->query($query);
    if($result)
        return $result->fetch_assoc();
    else 
        return [
            "level" => $level,
            "score" => null
        ];
}