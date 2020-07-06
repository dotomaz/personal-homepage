import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Svg from '../images/hello-web.svg';
import Svg2 from '../images/name-web.svg';

const Hello = styled(Svg)`
  path{
    fill: ${props => props.$animate ? '#000' : '#fff' };
    stroke-dashoffset: ${props => props.$animate ? '0' : '3765px' };
    transition: stroke-dashoffset 2s, fill 0.4s linear 2s;
  }
`

const Name = styled(Svg2)`
  .path-t{
    stroke-dasharray: 14px;
    stroke-dashoffset: ${props => props.$animate ? '28px' : '14px' };
    transition: stroke-dashoffset 0.6s linear 0s;
  }

  .path-o{
    stroke-dasharray: 26px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '26px' };
    transition: stroke-dashoffset 0.6s linear 0.1s;
  }

  .path-m{
    stroke-dasharray: 15px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '15px' };
    transition: stroke-dashoffset 0.6s linear 0.2s;
  }

  .path-a{
    stroke-dasharray: 20px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '20px' };
    transition: stroke-dashoffset 0.6s linear 0.3s;
  }

  .path-z{
    stroke-dasharray: 10px;
    stroke-dashoffset: ${props => props.$animate ? '20px' : '10px' };
    transition: stroke-dashoffset 0.6s linear 0.4s;
  }

  .path-d{
    stroke-dasharray: 25px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '25px' };
    transition: stroke-dashoffset 0.6s linear 0.5s;
  }

  .path-o2{
    stroke-dasharray: 25px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '25px' };
    transition: stroke-dashoffset 0.6s linear 0.6s;
  }

  .path-b{
    stroke-dasharray: 20px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '20px' };
    transition: stroke-dashoffset 0.6s linear 0.7s;
  }

  .path-r{
    stroke-dasharray: 8px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '8px' };
    transition: stroke-dashoffset 0.6s linear 0.8s;
  }

  .path-i{
    stroke-dasharray: 8px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '8px' };
    transition: stroke-dashoffset 0.6s linear 0.9s;
  }

  .path-s{
    stroke-dasharray: 27px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '27px' };
    transition: stroke-dashoffset 0.6s linear 1s;
  }

  .path-e{
    stroke-dasharray: 31px;
    stroke-dashoffset: ${props => props.$animate ? '0' : '31px' };
    transition: stroke-dashoffset 0.6s linear 1.1s;
  }

  .path-k{
    stroke-dasharray: 13px;
    stroke-dashoffset: ${props => props.$animate ? '26px' : '13px' };
    transition: stroke-dashoffset 0.6s linear 1.2s;
  }
`


const IndexPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => setAnimate(true) );

  return (
    <Layout>
      <SEO title="Home" />
      <Name $animate={animate}/>
    </Layout>
    )
}

export default IndexPage
