<?php

// $con=new mysql('localhost','root','','crudoperation');
$con = new \MySQLi('localhost', 'root', '', 'crudoperation');
if($con){
    echo "Connection Successful";
}
else{
    die(mysqli_error($con));
}

?>