import logo from './logo.svg';
import './App.css';

function Login() {
  return (
    

    <div>
        <div class="back">

          <div class="login">
          <h1>LOGIN</h1><br/>
          <div class="user">UserName</div><br/>
          <i class="fa-solid fa-user"></i><input class="q" type="text" value="Type your Username" /><br/><br/>
          PASSWORD<br/><br/>
          <i class="fa-solid fa-lock"></i><input class="q" type="text" value="Type your Password"/><br/><br/>
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="PL cilck on login to login">
          LOG IN 
          </button>
          <br/><br/>
          <input class="w" type="button" value="Forget password"/><br/><br/>
           <div class="y">Or sign up using</div>
           <ul class="t">
           <li class="r"><i class="fa-brands fa-facebook"></i></li>
           <li class="r"><i class="fa-brands fa-instagram"></i></li>
           <li class="r"><i class="fa-brands fa-linkedin"></i></li>
           </ul>
           <div class="u">Or sign up using</div>
           <div>sign in</div>


           </div>


      </div>

    </div>
  )
}

export default Login;
