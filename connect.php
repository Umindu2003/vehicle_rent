<?php

// $con=new mysqli('localhost','root','','iwtassign');
$con = new \MySQLi('localhost', 'root', '', 'iwtassign');
if($con){
    // echo "Connection Successful";
}
else{
    die(mysqli_error($con));
}

?>