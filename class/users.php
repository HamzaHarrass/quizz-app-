<?php
    require_once "data\connextion.php";
    require_once "class\person.php";

    class user extends person {
        public static function signUp($username, $email, $password){
            global $conn;
            $query = "INSERT INTO `user`(`username`, `email`, `password`) VALUES ('$username','$email','$password')";
            $stmt = $conn->prepare($query);
            $stmt->execute();
            header("location: ../index.php");
        }
        public function login(){
            $_SESSION["id"] = $this->id;
            $_SESSION["username"] = $this->username;
            $_SESSION["email"] = $this->email;
            $_SESSION["password"] = $this->password;
            $_SESSION["loginMessage-success"] = "welcome back ". $this->username;
            header("location: ./quiz-page.php");
        }
        public function showQuestions(){
            global $conn;
            $query = "SELECT * FROM `question`";
            $stmt = $conn->prepare($query);
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;
        }
        public function showScores(){
            global $conn;
            $query = "SELECT * FROM `score` WHERE `user_id` = $this->id";
            $stmt = $conn->prepare($query);
            $stmt->execute();
            $result = $stmt->fetchAll();
            return $result;
        }
    }
?>