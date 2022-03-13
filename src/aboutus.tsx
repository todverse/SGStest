import * as React from 'react'
import './aboutus.scss'
const ava1 = require('./ava1.png')
const ava2 = require('./ava2.png')
const ava3 = require('./ava3.png')
interface IState {
    s? : string,
    s1? : string,
    s2? : string,
}


class AboutUs extends React.Component<IState> {
    public state: IState = {
        s : 'hideElem hide',
        s1 : 'hideElem hide',
        s2 : 'hideElem hide'
    }
    public hover = () => {
        this.setState({s : 'hideElem'});
    }
    public unhover = () => {
        this.setState({s : 'hideElem hide'});
    }
    public hover1 = () => {
        this.setState({s1 : 'hideElem'});
    }
    public unhover1 = () => {
        this.setState({s1 : 'hideElem hide'});
    }
    public hover2 = () => {
        this.setState({s2 : 'hideElem'});
    }
    public unhover2 = () => {
        this.setState({s2 : 'hideElem hide'});
    }
    public render() {
        return(
            <div className='aboutus' id='about'>
                <h1 className='aboutus_mainText'>About Us</h1>    
                <p className='aboutus_text'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.    
                </p>
                <div className='ab_flex'>
                    <div className='ab_flex_elem'>
                        <img className='ab_flex_elem_img' src={ava1} onMouseEnter={this.hover} onMouseLeave={this.unhover}></img>  
                        <div className={this.state.s} onMouseEnter={this.hover}>
                            <a href='' className='social'><i className='fa fa-2x fa-facebook'></i></a>  
                            <a href='' className='social'><i className='fa fa-2x fa-twitter'></i></a>
                            <a href='' className='social'><i className='fa fa-2x fa-google-plus'></i></a>
                            <a href='' className='social'><i className='fa fa-2x fa-dribbble'></i></a>
                        </div>  
                        <div className='ab_flex_elem_text'>
                            <h3 className='title'>Melannie Doe</h3>    
                            <p className='prof'>Projact Manager</p>
                            <p className='other'>
                                Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation
                            </p>
                        </div>    
                    </div>    
                    <div className='ab_flex_elem'>
                        <img className='ab_flex_elem_img' src={ava2} onMouseEnter={this.hover1} onMouseLeave={this.unhover1}></img>   
                        <div className={this.state.s1} onMouseEnter={this.hover1}>
                            <a href='' className='social'><i className='fa fa-2x fa-facebook'></i></a>  
                            <a href='' className='social'><i className='fa fa-2x fa-twitter'></i></a>
                            <a href='' className='social'><i className='fa fa-2x fa-google-plus'></i></a>
                            <a href='' className='social'><i className='fa fa-2x fa-dribbble'></i></a>    
                        </div> 
                        <div className='ab_flex_elem_text'>
                            <h3 className='title'>Jhonnie Doe</h3>    
                            <p className='prof'>Graphic Designer</p>
                            <p className='other'>
                                Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl
                                ut aliquip ex ea commodo
                                consequat.
                            </p>    
                        </div>      
                    </div>    
                    <div className='ab_flex_elem'>
                        <img className='ab_flex_elem_img' src={ava3} onMouseEnter={this.hover2} onMouseLeave={this.unhover2}></img>  
                        <div className={this.state.s2} onMouseEnter={this.hover2}>
                            <a href='' className='social'><i className='fa fa-2x fa-facebook'></i></a>  
                            <a href='' className='social'><i className='fa fa-2x fa-twitter'></i></a>
                            <a href='' className='social'><i className='fa fa-2x fa-google-plus'></i></a>
                            <a href='' className='social'><i className='fa fa-2x fa-dribbble'></i></a>     
                        </div>  
                        <div className='ab_flex_elem_text'>
                            <h3 className='title'>Daniel Doe</h3>    
                            <p className='prof'>Web Designer</p>
                            <p className='other'>
                                Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation
                                ullamcorper suscipit.
                            </p>    
                        </div>      
                    </div>    
                </div>
            </div>
        )
    }
}

export default AboutUs