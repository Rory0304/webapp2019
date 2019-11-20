<?php
    //  try {
    //     $db = new PDO("mysql:dbname=webapp; host=13.125.234.76; port=3306", "root", "1234");
    //     $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //     //php 변수 쓸려면 
    //     $onetoone = $_GET["onetoone"];
    //     $onetotone = $db->quote($onetotone);
    //     $font = $_GET["font"];
    //     $font = $db->quote($font);
    //     $fontsize = $_GET["fontsize"];
    //     $fontsize = $db->quote($fontsize);
    //     $titlecolor = $_GET["titlecolor"];
    //     $titlecolor = $db->quote($titlecolor);
    //     $contentscolor = $_GET["contentscolor"];
    //     $contentscolor = $db->quote($contentscolor);
    //     $rows = $db->exec("INSERT INTO save VALUES ($onetoone, $font, $fontsize, $titlecolor, $contentscolor)");
    // } catch (PDOException $ex) {
        
    // }

    ?>
    <script>
        alert('<?php echo $_POST['selectFontFamily']; ?>');
        alert('<?php echo $_POST['selectfontsize']; ?>');
        alert('<?php echo $_POST['titlecolor']; ?>');
        alert('<?php echo $_POST['contentscolor']; ?>');
    </script>
    <?php
    // header("Location: ".$SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
?>