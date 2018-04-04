import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import ban1 from './images/ban1.jpg';
import ban2 from './images/ban2.jpg';
import ban3 from './images/ban3.jpg';
import ban4 from './images/ban4.jpg';

// const slide = {
//   width:'100%',
//   height: '50%'
// };

class Slider extends Component {
    render () {
        return (
            <Carousel>
            <Carousel.Item>
              <img style={{width: 1210, height: 400}} alt="900x500" src={ban1}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{width: 1200, height: 400}} alt="900x500" src={ban2}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{width: 1200, height: 400}} alt="900x500" src={ban3}/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img style={{width: 1200, height: 400}} alt="900x500" src={ban4}/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        )
    }
}
export default Slider