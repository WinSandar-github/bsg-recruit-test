<?php
    include_once("db.php");
    
    $sql="INSERT INTO user(name,phone,email,zip,prefecture,city,address,note)".
                    "VALUES('{$_POST['name']}','{$_POST['phone']}','{$_POST['email']}','{$_POST['zip']}',
                    '{$_POST['prefecture']}','{$_POST['city']}','{$_POST['address']}','{$_POST['note']}')";
    if($con->exec($sql)){
        echo "Register Successfully";
    }
            
 ?>