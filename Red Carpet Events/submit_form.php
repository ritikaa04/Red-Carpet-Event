<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ritika@gmail.com";
    $subject = "New Contact Us Query";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
            document.getElementById('confirmation-message').style.display = 'block';
        </script>";
    } else {
        echo "There was a problem sending your query. Please try again.";
    }
}
?>
