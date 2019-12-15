<?php
    session_start();
    session_destroy();
    header("Location: http://".$_SERVER['HTTP_HOST']."/webapp2019/selab/");
?>