<?php
     //gives us the $conn var
     require('./dbconnect.php');

    //Get the list with scores 
    if($_SERVER['REQUEST_METHOD'] == "GET"){
        $response = [];
        $scores = [];
            
        if(isset($_GET['offset'])){
            if(is_numeric($_GET['offset'])){
                echo json_encode(['error' => "invalid offset"]);
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
        $response['links'] = ['next' => strtok($_SERVER["REQUEST_URI"],'?') + "?offset=$offset"];

        echo json_encode($response);
        exit;
    }

    //Add a new score
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $response = [];

        if(!is_numeric($_POST['score'])){
            $response['error'] = ['validation' => 'score not valid'];

            echo json_encode($response);
            exit;
        }

        if(!isset($_POST['name'])){
            $response['error'] = [
                'validation' => 'name not valid'
            ];

            echo json_encode($response);
            exit;
        }

        add($conn, $_POST('name'), $_POST['score']);

        $response['msg'] = 'succes';

        echo json_decode($response);
        exit;
    }
    
/**
 * @param $conn
 * @return array
 */
    function listScores($conn, $offset = 0) {
        $array = [];

        $query = "SELECT * FROM scores ORDER BY score LIMIT 25 OFFSET $offset";
        $result = $conn->query($query);

        while ($row = $result->fetch_assoc())
        {
            $array[] = $row;
        }

        return $array;
    }


function add($conn, $name, $score){
        $name = mysqli_real_escape_string($conn, $name);
        $score = mysqli_real_escape_string($conn, $score);
        $date = date("d-m-Y");
        $query = "INSERT INTO scores (name, score, date) VALUES (". $name .  ", ". $score . ", ". $date .")";

        $result = $conn->query($query);
    }
