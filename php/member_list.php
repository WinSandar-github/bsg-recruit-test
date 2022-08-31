<?php
    include_once("db.php");

    $sql=$con->prepare("SELECT * FROM user ORDER BY id ASC");
    if($sql->execute()){
        echo json_encode($sql->fetchAll());
    }
         
 ?>