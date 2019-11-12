<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["fio"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$phone = trim($_POST["phone"]);
        $category = trim($_POST["category"]);
        $organization = trim($_POST["organization"]);
        $position = trim($_POST["position"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($category) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! Попробуйте снова";
            exit;
        }
        if ($category == "1") {
            $category = "Коммерческие компании (участие платное)";
            $recipient = "e.romanova.design@gmail.com";
        } else {
            $category = "Государственные структуры, отраслевые ассоциации и некоммерческие организации";
            $recipient = "alukardwashere@gmail.com";
        }
        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        // Set the email subject.
        $subject = "Контактная форма 10letgk";

        // Build the email content.
        $email_content = "Имя: $name\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Телефон: $phone\n\n";
        $email_content .= "Категория: $category\n\n";
        $email_content .= "Название организации: $organization\n\n";
        $email_content .= "Должность: $position\n";

        // Build the email headers.
        $email_headers = "MIME-Version: 1.0\r\n";
		$email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
		$email_headers .= "From: <noreply@10letgk.ru>\r\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Ваше сообщение было отправлено. Спасибо!";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Что-то пошло не так и мы не смогли отправить сообщение.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Попробуйте снова";
    }

?>