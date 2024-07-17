<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require 'vendor/autoload.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/phpmailer/phpmailer/src/Exception.php';
    require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require 'vendor/phpmailer/phpmailer/src/SMTP.php';

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__, '.env.local');
    $dotenv->load();

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
            $mail->Username = $_ENV['USERNAME'];
            $mail->Password = $_ENV['PASSWORD'];
            $mail->SMTPSecure = 'TLS';
            $mail->Port       = 587;

            // Получатели
            $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
            $mail->addAddress($_ENV['TO_EMAIL'], $_ENV['TO_NAME']);
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