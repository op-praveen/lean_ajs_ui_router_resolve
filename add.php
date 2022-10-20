<?php
header('Access-Control-Allow-Origin: *');
// ECHO $_GET['for'];
// ECHO $_GET['for']=="mul";
if (isset($_GET['for']) && $_GET['for']=="mul") {
    echo $_GET['a'] * $_GET['b'];
}else if (isset($_GET['for']) && $_GET['for']=="add") {
    echo $_GET['a'] + $_GET['b'];
}
?>