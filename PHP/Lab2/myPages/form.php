<html>
  <head>
    <title>contact form</title>
    <link rel="stylesheet" href="mypages/style.css">
  </head>

  <body>
    <h3>Contact Form</h3>

    <form id="contact_form" action="index.php" method="POST">
      <div id="after_submit"></div>

      <h1>
        <?php
        echo $error; ?>
      </h1>
      <div class="row">
        <label class="required" for="name">Your name:</label><br />
        <input
          id="name"
          class="input"
          name="name"
          type="text"
          value="<?php echo remember_var("name"); ?>"
          size="30"
        /><br />
      </div>
      <div class="row">
        <label class="required" for="email">Your email:</label><br />
        <input
          id="email"
          class="input"
          name="email"
          type="text"
          value="<?php echo remember_var("email"); ?>"
          size="30"
        /><br />
      </div>
      <div class="row">
        <label class="required" for="message">Your message:</label><br />
        <textarea
          id="message"
          class="input2"
          name="message"
          rows="7"
          cols="30"
        ></textarea
        ><br />
      </div>

      <input id="submit" name="submit" type="submit" value="Send email" />
      <input id="clear" name="clear" type="reset" value="clear form" />
    </form>
  </body>
</html>
