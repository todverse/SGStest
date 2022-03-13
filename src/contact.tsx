import React from 'react'
import './contact.scss'



class Footer extends React.Component {
    public up = () => {
        let inter: NodeJS.Timer;
        inter = setInterval(() => {
            window.scrollBy(0, -80);
            if(document.body.getBoundingClientRect().top === 0) clearInterval(inter)
        }, 10)
        
    }
    public render() {
        return(
            <div className='footer'>
                <p className='footer_text'>© Copyright 2016 Bla Bla Studio  |  One Page Flat Template</p>
                <button onClick={this.up} className='footer_btn'><i className='fa fa-2x fa-chevron-up'></i></button>
            </div>
        )
    }
}

class Contact extends React.Component {
    public render() {
        return(
            
            <div className='contact' id='contact'>
                <h1 className='contact_maintext'>Contact Us</h1>
                <p className='contact_text'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.      
                </p>
                <div className='contact_flexbox'>
                    <div className='contact_formbox'>
                        <form className='contact_form'>
                            <input className='contact_form-name' type='text' placeholder='Your name'></input> 
                            <input className='contact_form-email' type='email' placeholder='Your e-mail'></input><br/>
                            <textarea className='contact_form-message' placeholder='Your message'></textarea><br/>
                            <input className='contact_form-submit' type='submit' value='SUBMIT'></input>
                        </form>    
                    </div>   
                    <div className='contact_map'>
                        <p className='contact_adress'><i className='fa fa-map-marker'></i>BLA BLA Company, Moscow, Kolodezny pereulok, 2a</p>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A91a40ba9f4506f4fb204b260dc97997283790e4e0c1fba8345c29069c3a0c2d8&amp;source=constructor" width="100%" height="90%" frameBorder="0"></iframe>
                    </div> 
                </div>
            </div>
            
        )
    }
}


export {Contact, Footer}