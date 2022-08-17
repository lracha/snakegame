
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import Text from "../../Text"

export const Container = styled.TouchableOpacity`
    margin-top:  ${props => props.theme.metrics.padding};
    margin-bottom: ${props => props.theme.metrics.padding};
    width: ${props => props.theme.metrics.button.width};
    height: ${props => props.theme.metrics.button.height};
    flex-direction: ${props => props.inverted ? "row-reverse" : "row"};
    align-items: center;
    justify-content: center;
    border-left-width: 0.1px;
    border-right-width: 0.1px;
    border-bottom-width: ${props => props.theme.metrics.button.borderBottomWidth};
    ${props =>
        props.type === "primary" || props.type == null ? "background-color:" + props.theme.colors.primary + "; border-color:" + props.theme.colors.primaryShadow
            : props.type === "secondary" ? "background-color:" + props.theme.colors.card + "; border-color:" + props.theme.colors.cardShadow
                : props.type === "success" ? "background-color:" + props.theme.colors.success + "; border-color:" + props.theme.colors.successShadow
                    : props.type === "danger" ? "background-color:" + props.theme.colors.danger + "; border-color:" + props.theme.colors.dangerShadow
                        : "background-color:" + props.backgroundColor + "; border-color:" + props.backgroundColor
    }
`

export const ButtonIcon = styled(Ionicons)`
    font-size: ${props => props.theme.metrics.button.iconSize};
    color: ${props => props.textColor ? props.textColor : props.type != "secondary" ? props.theme.colors.textAltLight : props.theme.colors.text};
`
