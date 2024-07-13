<?php
// $_POST = json_decode( file_get_contents("php://input"), true );
// echo var_dump($_POST);

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

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
        $mail->Password   = 'jjtxhaxxhlsdcuky';
        $mail->SMTPSecure = 'TLS';
        $mail->Port       = 587;

        // Получатели
        $mail->setFrom('alexei.kruk.dev@gmail.com', 'Patriot');
        $mail->addAddress('alexei.kruk.dev@gmail.com', 'Alexei');
        $body = '<p>Name: '.$_POST['name'].'</p>' . '<p>Phone: '.$_POST['phone'].'</p>';

        // Содержание
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Message';
        $mail->Body    = $body;

        $mail->send();
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Сообщение отправлено']);
    } catch (Exception $e) {
        header('Content-Type: application/json');
        echo json_encode(['message' => "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}"]);
    }
}
?>