<?php
    include_once("db.php");
        
    $sql=$con->prepare("SELECT * FROM prefecture");
    if($sql->execute()){
        echo json_encode($sql->fetchAll());
    }
    
 ?>