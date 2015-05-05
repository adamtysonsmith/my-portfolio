<?php

$to = "adam@adamtsmith.info";

$subject = "Portfolio Contact Form Inquiry";
$message = "Name: " . filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$message .= "<br>Phone: " . filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
$message .= "<br>Email: " . filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$message .= "<br>Reason: " . filter_var($_POST['reason'], FILTER_SANITIZE_STRING);
$message .= "<br>Message: " . filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: " . filter_var($_POST['name'], FILTER_SANITIZE_STRING) . " <" . filter_var($_POST['email'], FILTER_SANITIZE_STRING) . ">". "\r\n";

if( mail($to, $subject, $message, $headers) ) {
	echo "ok";
} else {
	echo "error";
}

?>