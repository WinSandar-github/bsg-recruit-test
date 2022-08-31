<?php
    include_once("db.php");

    $sql=$con->query("SELECT * FROM admin_user WHERE email='{$_POST['email']}'");
    $stmt=$sql->fetchAll();
    foreach($stmt as $row )
        {
            $checkPwd=password_verify($_POST['password'],$row->password);
            if($checkPwd > 0){
                echo $row->id;
            }
        }
        
 ?>