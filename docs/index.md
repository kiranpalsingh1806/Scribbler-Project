<!DOCTYPE html>
<html>

<head>
    <!-- TODO: Include Font Awesome file here -->
    <!-- TODO: Include Google Fonts file here -->
    <link rel="stylesheet" href="../css/index.css">
    <script src="../js/index.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>
    
    <div class="header" id="wrapper">
        <span>
        <button type="button" class="button1" href="#myModal2" class="trigger-btn" data-toggle="modal">Sign Up</button>
        <button type="button" class="button2" href="#myModal" class="trigger-btn" data-toggle="modal">Sign In</button>
        <span STYLE="font-size: 50px;margin-left: 25px;"class ="logotitle" onClick="location.href='index.html'">ScriBBler</span>
    </span>
    <div>
        <h5 class="belowlogo" style="margin: 2px;margin-left: 25px; font-size:22px;">Explore. Imagine. Create</h5>
    </div>
    </div>

    <div class="containerButton">
      <div class="centerButton">
       <button type="button" class="button3" onclick="document.location='bloglist.html'">All Posts</button>
        <button type="button" class="button4" href="#myModal3" class="trigger-btn" data-toggle="modal">Create Post</button>
      </div>
    </div>

<!-- Sign in Modal -->
    <!-- Modal HTML -->
    <div id="myModal" class="modal fade">
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">        
            <h4 class="modal-title">Welcome Back</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <form action="/examples/actions/confirmation.php" method="post">

              <label>Username</label>
              <div class="form-group">
                <i class="fa fa-user"></i>
                <input type="text" class="form-control" placeholder="Username" required="required">
              </div>

              <label>Password</label>
              <div class="form-group">
                <i class="fa fa-lock"></i>
                <input type="password" class="form-control" placeholder="Password" required="required">         
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login">
              </div>
            </form>         
          </div>
          <div class="modal-footer">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>


<!-- Sign Up Modal -->
    <!-- Modal HTML -->
    <div id="myModal2" class="modal fade">
      <div class="modal-dialog modal-signup">
        <div class="modal-content">
          <div class="modal-header">        
            <h4 class="modal-title">Get Started</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
          <div class="modal-body">
            <form action="/examples/actions/confirmation.php" method="post">
                      
                      <label>Full Name</label>
              <div class="form-group">
                <i class="fa fa-user"></i>
                          
                <input type="text" class="form-control" placeholder="Full Name" required="required">
              </div>
                      
                      <label>Username</label>
              <div class="form-group">
                <i class="fa fa-user"></i>
                          
                <input type="text" class="form-control" placeholder="Username" required="required">
              </div>
                      <label>Password</label>
              <div class="form-group">
                <i class="fa fa-lock"></i>
                <input type="password" class="form-control" placeholder="Password" required="required">         
              </div>
                      
                      <label>Confirm Password</label>
              <div class="form-group">
                <i class="fa fa-user"></i>
                          
                <input type="text" class="form-control" placeholder="Confirm Password" required="required">
              </div>
                      
              <div class="form-group">
                <input type="submit" class="btn btn-primary btn-block btn-lg" value="Sign Up">
              </div>
                      
            </form>       
            
          </div>
          <div class="modal-footer">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>


     <!-- Modal HTML -->
     <div id="myModal3" class="modal fade">
      <div class="modal-dialog modal-createpost">
        <div class="modal-content">
          <div class="modal-header">        
            <h4 class="modal-title">Pen your Post</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>
               
               <label for="fname">Title </label><br>
       <input type="text" id="fname" name="fname"><br><br>
               
               <label for="fname">Content</label><br>
       <input type="text" id="fname" name="fname" style="width:550px; height:300px"><br><br>
               

              <div class="form-group">
                <input type="submit" class="btn btn-primary btn-block" value="Create">
              </div>
            </form>       
            
          </div>
        </div>
      </div>
     </div>       

</body>

</html>
