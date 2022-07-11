import logo from '../../assets/img/logo.svg';
import './styles.css';
function Header(){
  return(
    <header>
    <div className="dslogo-container">
     <img src={logo} alt="DSProject" />
       <h1>DSPROJECT</h1>
       <p>Desenvolvido por
    <a href="http://www.instagram.com/devsuperior.ig">@superior.ig</a>
      </p>
    </div>
  </header>
  )
}

export default Header;