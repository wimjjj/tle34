<?php
/**
 * Created by PhpStorm.
 * User: Tessa
 * Date: 4-5-2017
 * Time: 15:38
 */

$servername = "localhost";
$username = "root";
$password = "";
$db = "tle34";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    echo json_encode(['mysqli_error' => $conn->error_get_last()]);
    exit;
}