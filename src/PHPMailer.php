<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

	$mail = new PHPMailer(true);

	try {
		// Настройки сервера
		$mail->SMTPDebug = SMTP::DEBUG_SERVER;                   
		$mail->isSMTP();                                          
		$mail->Host       = 'smtp.gmail.com';              
		$mail->SMTPAuth   = true;                             
		$mail->Username   = 'alexei.kruk.dev@gmail.com';                
		$mail->Password   = 'jjtx haxx hlsd cuky';               
		$mail->SMTPSecure = PHPMailer::SSL;
		$mail->Port       = 465;
	
		// Получатели
		$mail->setFrom('alexei.kruk.dev@gmail.com', 'Mailer');
		$mail->addAddress('recipient@example.com', 'Recipient Name'); // Добавьте получателя
	
		// Содержание
		$mail->isHTML(true);
		$mail->Subject = 'Новое сообщение с формы';
		$mail->Body    = "Имя: $name<br>Телефон: $phone";
		$mail->AltBody = "Имя: $name\nТелефон: $phone";
	
		$mail->send();
		echo 'Сообщение отправлено';
	} catch (Exception $e) {
		echo "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
	}
}

?>