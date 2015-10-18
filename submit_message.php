<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Filip Mirdita Personal Website</title>

    <link href="assets/css/bootstrap.css" rel="stylesheet" />

    <link href="assets/css/font-awesome.min.css" rel="stylesheet" />

    <link href="assets/scripts/vegas/jquery.vegas.min.css" rel="stylesheet" />

    <link href="assets/css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

     <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <?php
        $to = "filip.mirdita@gmail.com";
        $subject = "Website Message";
        $txt = $_POST['message'];
        $headers = "From:". $_POST['name'] . "\r\n" . $_POST['email'];

        mail($to,$subject,$txt,$headers);
    ?>
    </head>
<body>
        <div class="container" id="home">
        <div class="row text-center">
      <div class="col-md-12" >
          <h1 class="head-main">Thank you, <?php echo $_POST["name"]; ?></h1>
          <h3 class="head-last"> Your message has been sent. I look forward to reading it!</h3>
          <div><a class="btn transparent-btn btn-lg" href="index.html" role="button">Return to Website</a></div>
      </div>

      

    <script src="assets/plugins/jquery-1.10.2.js"></script>
    <script src="assets/plugins/bootstrap.js"></script>
    <script src="assets/plugins/vegas/jquery.vegas.min.js"></script>
    <script src="assets/js/custom.js"></script>
     
</body>
</html>
