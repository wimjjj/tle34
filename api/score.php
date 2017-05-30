<?php
    /**
     * Created by PhpStorm.
     * User: Tessa
     * Date: 4-5-2017
     * Time: 15:24
     */

     echo "hello word";
//     require('dbconnect.php');
//     // Create connection
//     $conn = new mysqli($servername, $username, $password, $db);

//     // Check connection
//     if ($conn->connect_error) {
//         die("Connection failed: " . $conn->connect_error);
//     }
//     echo "Connected successfully";

//     function add($conn, $name, $score){
//         $name = mysqli_real_escape_string($conn, $name);
//         $score = mysqli_real_escape_string($conn, $score);
//         $date = date("d-m-Y");
//         $query = "INSERT INTO scores (name, score, date) VALUES (". $name .  ", ". $score . ", ". $date .")";

//         $result = $conn->query($query);

//     }

// /**
//  * @param $conn
//  * @return string
//  */
//     function view($conn) {
//         $array = [];

//         $query = "SELECT name, score, date FROM 'scores' ORDER BY score LIMIT 25";
//         $result = $conn->query($query);

//         while ($row = $result->fetch_assoc())
//         {
//             $array[] = $row;
//         }

//         return json_encode($array);
//     }
