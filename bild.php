<?php

$lookup=array("ignore", "hintergrund", "anlage", "sterne", "sofa", "couchtisch", "fernsehertisch", "alexa", "vorhaenge", "vorhaenge_zu", "vorhaenge_zu_alexa", "rauchmelder", "schrank", "bett", "router", "rpi_s2", "rpi_s0", "strip1", "strip2", "strip3", "roomba_s2", "roomba_s0", "eckig", "handy_s1", "handy_s0", "fernseher", "switch", "procontroller1", "procontroller2", "ds", "ebook", "razer", "kopfhoerer", "uhr", "fenster", "fenster_alexa", "fenster_schrank", "fenster_vorhaenge", "fenster_vorhaenge_zu", "fenster_vorhaenge_zu_alexa",);


$idxs_str = $_GET["idxs"];

$praefix="./ebenen/";
if (intval($_GET["tagsueber"])==1){
	$praefix="./output/invertiert_";
} else if (intval($_GET["led"])==1){
	$praefix="./output/beleuchtung_";
} 

// Remove anything which isn't a number
// or any of the following caracters -_,;[]().
$idxs_str = mb_ereg_replace("([^\d\-])", '', $idxs_str);

if (strlen($idxs_str)==0){
	exit();
}

$idxs = explode("-",$idxs_str,50);

error_log("idxs_str" . $idxs_str . '\t' . sizeof($idxs), 3, "php://stdout");

if (empty($idxs) || count($idxs)==0){
	exit();
}

$fn1="1";//array_shift($idxs);//$idxs[0] + removes it
$image_1 = imagecreatefrompng($praefix . (intval($fn1)+1) . '-' . $lookup[$fn1] . '.png');


foreach ($idxs as $fn2) {

	// Remove anything which isn't a word, whitespace, number
	// or any of the following caracters -_~,;[]().

	$image_2 = imagecreatefrompng($praefix . (intval($fn2)+1) . '-' . $lookup[$fn2] . '.png');

	imagealphablending($image_1, true);
	imagesavealpha($image_1, true);
	imagecopy($image_1, $image_2, 0, 0, 0, 0, 64, 122);
}


header('Content-Type: image/png');
imagepng($image_1);
?>