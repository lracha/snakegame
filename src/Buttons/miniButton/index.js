import React from "react";
import { Container, ButtonIcon, ButtonTitle}from "./styles";

export default function MiniButton(props) {
    return (
        <Container {...props}>
            <ButtonIcon name={props.icon} type={props.type} textColor={props.textColor}/>
            <ButtonTitle type={props.type} textColor={props.textColor}>{props.title}</ButtonTitle>
        </Container>
    )
}