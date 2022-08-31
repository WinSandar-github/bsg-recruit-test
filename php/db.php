<?php
    try {
        $con=new PDO('mysql:dbhost=localhost:8080;dbname=recruit_test','root','',
            [
                PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING,
                PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_OBJ,
            ]
        );
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    
?>