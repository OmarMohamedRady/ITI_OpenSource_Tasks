<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>employees</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>

<body>
  <form action="index.php" method="POST">
    <div class="container">

      <div class="mb-3">
        <label for="id" class="form-label"></label>
        <input type="text" class="form-control" name="id" id="id" hidden value="<?php echo $id ?>">
      </div>
      
      <div class="mb-3">
        <label class="form-label">name</label>
        <input type="text" class="form-control" id="name" name="name" value="<?php echo $name ?>">
      </div>

      <div class="mb-3">
        <label class="form-label">phone</label>
        <input type="text" class="form-control" id="phone" name="phone" value="<?php echo $phone ?>">

      </div>

      <div class="mb-3">
        <label class="form-label">address</label>
        <input type="text" class="form-control" id="address" name="address" value="<?php echo $address ?>">

      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" id="email" name="email" value="<?php echo  $email ?>">
      </div>


      <div class="mb-3">
        <input type="submit" class="btn btn-primary" name="action" value="prev">
        <input type="submit" class="btn btn-primary" name="action" value="next">
        <input type="submit" class="btn btn-primary" name="action" value="search">
        <input type="submit" class="btn btn-primary" name="action" value="insert">
        <input type="submit" class="btn btn-primary" name="action" value="update">
        <input type="submit" class="btn btn-primary" name="action" value="delete">
        <input type="submit" class="btn btn-primary" name="action" value="save">
      </div>




  </form>


  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>

</html>