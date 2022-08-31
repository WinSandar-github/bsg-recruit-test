<?php
    include_once("db.php");
       
    $sql = "DELETE FROM user WHERE id='{$_POST['id']}'";
    if ($con->exec($sql)) {
        echo "Deleted Successfully";
    } 
 ?>