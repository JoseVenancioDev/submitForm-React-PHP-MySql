<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    $conn = new mysqli("localhost", "root", "bdjmf", "submitForm");

    if ($conn->connect_error) {
        die("Connection failed: ". $conn->connect_error);
        exit();
    }else{
        $name = $_POST['name'];
        $email = $_POST['email'];
        $mobile = $_POST['mobile'];

        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            echo "Email already exists";
        }else{
            $sql = "INSERT INTO users (name, email, mobile) VALUES ('$name', '$email', '$mobile')";
            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: ". $sql. "<br>". $conn->error;
            }
        }

        $conn->close();
    }
?>