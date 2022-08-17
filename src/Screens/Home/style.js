
import styled from "styled-components/native"
import Button from "../../components/Buttons/Button"


export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: ${props => props.theme.metrics.padding};
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.title.font};
    font-size:  ${props => props.theme.fonts.title.size};
    text-align: center;
    margin-bottom: ${props => props.theme.metrics.padding};
    color: ${props => props.theme.colors.text};
`

export const TopContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const Image = styled.Image.attrs(()=> ({resizeMode: "contain"}))`
    width: 100%;
    height: 189px;
`

export const CButton = styled(Button)`
    margin-bottom: ${props => props.theme.metrics.padding};
`