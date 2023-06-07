<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['files'])) {

  $uploadsDir = 'uploads/'; // Specify the directory where you want to save the uploaded files

  // Iterate through the uploaded files

  foreach ($_FILES['files']['tmp_name'] as $key => $tmpName) {

    $fileName = $_FILES['files']['name'][$key];

    $fileType = $_FILES['files']['type'][$key];

    $fileSize = $_FILES['files']['size'][$key];

    $fileError = $_FILES['files']['error'][$key];

    $targetPath = $uploadsDir . $fileName;

    // Move the temporary file to the target path

    if (move_uploaded_file($tmpName, $targetPath)) {

      // File uploaded successfully

      echo "File uploaded: " . $fileName;

    } else {

      // Error occurred while uploading the file

      echo "Error uploading file: " . $fileName;

    }

  }

}

?>

