import React, { Component } from 'react'
import  "./item.css";
import {
    Link
} from 'react-router-dom'

export default class Item extends Component {
    render() {
        const imgUrl = 'http://39.108.135.222/upload_resize/'+this.props.val.image;
        let text = this.props.val.text;
        text = text.length >22? text.slice(0,21)+'...' : text;
        let to = '/'+this.props.val.id;
        return (
            <Link to = {to}>
                <div className = 'components' style = {{height:'2.2rem',background:'#ccc'}} >
                    <div className = 'itemFont'>
                        <span>{this.props.val.name}</span>
                        <div>{text}</div>
                    </div>
                    <div className='itemImg'><img className='img' alt = '失物图片' src= {imgUrl} /></div>    
                </div>
            </Link>
        )
    }
}
