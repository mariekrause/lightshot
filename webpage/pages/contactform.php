<?php

if (isset($_POST['submit'])) {
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailto = "marie.krause48@web.de";
$header = "Neue Nachricht von ". $mailfrom;
$txt = $name. "hat eine Anfrage gesendet".".\n\n. $message";

mail($mailto, $subject, $txt, $header);
header("Location: ../index.html");
}


?>