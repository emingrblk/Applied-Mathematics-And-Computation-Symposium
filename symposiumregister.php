<?php 
include("dbConnection.php");
// formdan gelen post datalarını değişkenlere atayalım
$name = $_POST["name"];
$surname = $_POST["surname"];
$university = $_POST["university"];
$section = $_POST["section"];

// değişkenlerdeki verileri 3 ten büyükse işlem yaptıralım
if (strlen($name)>3 && strlen($surname) > 3 && strlen($university)>3  && strlen($section) > 3) {
	// herşey tamam kayıt ekleyebiliriz.
	$query = $db->prepare("INSERT INTO symposion (name,surname,university,section, flag) VALUES (:name,:surname,:university,:section, :flag)");
	$insert = $query->execute([
		"name" => $name,
		"surname" => $surname,
		"university" => $university,
		"section" => $section,
		"flag" => 0
	]);
	if ($insert){ ?>
	<script type="text/javascript">
		alert("Kayıt işlemi başarıyla gerçekleşti");
		window.location.href = "index.php";
	</script>
	<? } else { ?>
	<script type="text/javascript">
		alert("Hata oluştu tekrar deneyiniz.");
		window.location.href = "index.php";
	</script>
	<?php }
}
?>