import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Header from './header'
import About from './about'
import AboutUs from './aboutus'
import {Contact, Footer} from './contact'
import './index.scss'
import 'font-awesome/css/font-awesome.min.css'


class App extends React.Component {
    public render() {
        return(
            <div>
                <Header />
                <About />
                <AboutUs />
                <Contact />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)