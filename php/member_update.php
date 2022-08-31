<?php
    include_once("db.php");

    $sql= 'UPDATE `user` ' 
		. "SET `name` = '{$_POST['name']}',`phone`='{$_POST['phone']}',`email`='{$_POST['email']}'," 
        ."`zip`='{$_POST['zip']}',`prefecture`='{$_POST['prefecture']}',`city`='{$_POST['city']}',"
        ."`address`='{$_POST['address']}',`note`='{$_POST['note']}'"
		. "WHERE `id` = '{$_POST['id']}'";
    $stmt = $con->prepare($sql);
    if($stmt->execute())
    {
      echo 'Updated Successfully';
    }
 ?>