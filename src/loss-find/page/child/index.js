import React, { Component } from 'react'
import axios from "axios";

export default class componentName extends Component {
    constructor() {
        super()
        this.state = {
            data:''
        }
    }
    componentDidMount = () => {
        let { match } = this.props
        axios.get('/find.php')
            .then((res) => {
                res.data.forEach((obj, i) => {
                    if (obj.id === match.params.id) {
                        this.setState({data:obj})
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        const { data } = this.state;
        const imgUrl = 'http://39.108.135.222/upload/' + data.image;
        console.log(data)
        return (
            <div style={{ padding: '0.55rem' }}>
                <h1>{data.name}</h1>
                <p>{data.text}</p>
                <div>联系方式： {data.connect}</div>
                <div><img  alt='失物图片' src={imgUrl} style = {{width : '6.5rem' }} /></div>
            </div>
        )
    }
}
