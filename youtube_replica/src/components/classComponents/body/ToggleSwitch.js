import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;

    > input {
        display: none;
    }
`

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ddd;
    transition: 0.4s;
    border-radius: 15px;

    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 20px;
        width: 20px;
        background-color: #999;
        transition: 0.2s;
        border-radius: 50%;
    }
`

const SliderInput = styled.input`
    &:checked + ${Slider} {
        background-color: #8ab8db;
        &:before {
            transform: translateX(20px);
            background-color: #0365b2;
        }
    }
`

class ToggleSwitch extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <SliderInput type="checkbox" />
                <Slider />
            </Container>
        )
    }
}

export default ToggleSwitch