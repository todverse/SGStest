import * as React from 'react'
import './about.scss'

interface IState {
    flag?: string,
}


class About extends React.Component<IState> {
    public state: IState = {
        flag: 'all',
    };
    public al = () => {
        this.setState({flag: 'all'});
    }
    public wd = () => {
        this.setState({flag: 'wd'});
    }
    public gd = () => {
        this.setState({flag: 'gd'});
    }
    public fd = () => {
        this.setState({flag: 'fd'});
    }
    public render() {
        let all = [<div className='about_elem a'></div>,<div className='about_elem b'></div>,
            <div className='about_elem c'></div>,<div className='about_elem d'></div>,
            <div className='about_elem e'></div>,<div className='about_elem f'></div>,
            <div className='about_elem g'></div>,<div className='about_elem h'></div>];
        let wd = [<div className='about_elem a'></div>,<div className='about_elem d'></div>,
                <div className='about_elem c'></div>];
        let gd = [<div className='about_elem b'></div>,<div className='about_elem e'></div>,
                <div className='about_elem b'></div>];
        let fd = [<div className='about_elem f'></div>,<div className='about_elem g'></div>];
        let now;
        if(this.state.flag === 'all') {
            now = all;
        } else if(this.state.flag === 'wd') {
            now = wd;
        } else if(this.state.flag === 'gd') {
            now = gd;
        } else if(this.state.flag === 'fd') {
            now = fd;
        }
        return (
            <div className='about' id='portfolio'>
                <h1 className='about_maintext'>Portfolio</h1>
                <p className='about_text'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <button className='buttons_about' onClick={this.al}>All</button>
                <button className='buttons_about' onClick={this.wd}>Web Design</button>
                <button className='buttons_about' onClick={this.gd}>Graphic Design</button>
                <button className='buttons_about' onClick={this.fd}>Flat Design</button>
                <div className='about_elems'>
                    {now}
                </div>
            </div>
        )
    }
}


export default About