<?php
    include_once("db.php");
        
    $sql=$con->query("SELECT user.*,prefecture.name as pre_name,prefecture.id as pre_id FROM user INNER JOIN prefecture ON user.prefecture=prefecture.id WHERE user.id='{$_POST['id']}'");
    $stmt=$sql->fetch();
    echo json_encode($stmt);
        
 ?>