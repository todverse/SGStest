import * as React from 'react'
import './header.scss'
const logo = require('./logo.png');

interface S {
    open?: string,
}

class Header extends React.Component<S> {
    public state: S = {
        open: 'hideNav',
    };
    public showPan = () => {
        if(this.state.open === 'hideNav') {
            this.setState( {open : 'showNav'} );
        } else {
            this.setState( {open : 'anim'} );
            setTimeout(() => {this.setState( {open : 'hideNav'} );}, 700);
        }
    }
    public p = () => {
        let inter: NodeJS.Timer;
        inter = setInterval(() => {
            window.scrollBy(0, 80);
            if(document.body.clientHeight+document.body.getBoundingClientRect().top === window.innerHeight) {
                clearInterval(inter)
            }
        }, 10)
    }
    public render() {
        return(
            <div className='header' id='home'>
                <div className='navPan'>
                    <img src={logo} className='header_logo'></img>
                    <div className='logo_textbox'>
                        <h1>BLA BLA</h1>
                        <p>One Page Flat Template</p>
                    </div>
                    <div className={this.state.open}>
                        <ul className='nav-h'>
                            <li className='nav_elem'><a href='#home' className='nav_elem_link'>Home</a></li>
                            <li className='nav_elem'><a href='#portfolio' className='nav_elem_link' id='p'>Portfolio</a></li>
                            <li className='nav_elem'><a href='#about' className='nav_elem_link'>About</a></li>
                            <li className='nav_elem'><a href='#contact' className='nav_elem_link'>Contact</a></li>
                        </ul>
                        <i className='fa fa-2x fa-window-close closeHideNav' onClick={this.showPan}></i>
                    </div>
                    <ul className='nav'>
                        <li className='nav_elem'><a href='#home' className='nav_elem_link'>Home</a></li>
                        <li className='nav_elem'><a href='#portfolio' className='nav_elem_link'>Portfolio</a></li>
                        <li className='nav_elem'><a href='#about' className='nav_elem_link'>About</a></li>
                        <li className='nav_elem'><a href='#contact' className='nav_elem_link'>Contact</a></li>
                    </ul>
                    <i className='fa fa-3x fa-caret-square-o-down' id='btn_open' onClick={this.showPan}></i>
                </div>
                <div className='mainHead'>
                    <h1 className='mainHead_text'>WE BUILD <span className='bold'>BRAND</span></h1>
                    <p className='mainHead_t'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                    <button className='header_btn'>Learn More</button><br></br>
                    <i className='fa fa-4x fa-chevron-circle-down mainHead-icon' onClick={this.p}></i>
                </div>
            </div>
        )
    }
}
export default Header;