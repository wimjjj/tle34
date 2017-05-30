<?php
    /**
     * Created by PhpStorm.
     * User: Tessa
     * Date: 4-5-2017
     * Time: 15:24
     */
     //gives us the $conn var
     require('dbconnect.php');
         
     if($_SERVER['REQUEST_METHOD'] == "GET"){
        $response = [];
        $scores = [];
            
        if(isset($_GET['offset'])){
            if(is_numeric($_GET['offset'])){
                echo json_encode([
                    'error' => "invalid offset"
                ]);
                exit;
            } 

            $scores = listScores($conn, $_GET['offset']);    
        } else{
            $scores = listScores($conn);
        } 

        $response['data'] = $scores;

        $response['meta'] = [
            'params' => $GET,
            'uri' => $_SERVER["REQUEST_URI"] 
        ];

        isset($GET['offset']) ? $offset = $GET['offset'] + 25 : $offset = 25;
        $response['links'] = [
            'next' => "parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH)?offset=$offset"
        ]

     }

    function add($conn, $name, $score){
        $name = mysqli_real_escape_string($conn, $name);
        $score = mysqli_real_escape_string($conn, $score);
        $date = date("d-m-Y");
        $query = "INSERT INTO scores (name, score, date) VALUES (". $name .  ", ". $score . ", ". $date .")";

        $result = $conn->query($query);

    }

/**
 * @param $conn
 * @return array
 */
    function listScores($conn, $offset = 0) {
        $array = [];

        $query = "SELECT name, score, date FROM 'scores' ORDER BY score LIMIT 25 OFFSET $offset";
        $result = $conn->query($query);

        while ($row = $result->fetch_assoc())
        {
            $array[] = $row;
        }

        return $array;
    }
