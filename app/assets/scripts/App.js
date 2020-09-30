import '../styles/styles.css';
import './modules/MobileMenu';
import MobileMenu from './modules/MobileMenu';

let mobileMenu = new MobileMenu;

if(module.hot){
    module.hot.accept();
}