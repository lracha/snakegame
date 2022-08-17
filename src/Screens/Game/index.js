import { Container, ControlContainer, RowContainer } from "./styles";
import { GameEngine } from "react-native-game-engine";
import React, { useRef, useState } from "react";
import constants from "../../constants";
import MiniButton from "../../components/Buttons/MiniButton"
import Head from "./components/Head"
import Body from "./components/Body"
import Food from "./components/Food"
import Loop from "./loop";


export default function Game() {
    const [isGameRunning, setIsGameRunning] = useState(true);
    const BoardSize = constants.GRID_SIZE * constants.CELL_SIZE;
    const engine = useRef(null);
    const randomPositions = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return (
        <Container>
            <GameEngine
                ref={engine}
                style={{
                    width: BoardSize,
                    height: BoardSize,
                    flex: null,
                    backgroundColor: "#BDFB4B",
                }}
                entities={{
                    head: {
                        position: [0, 0],
                        size: constants.CELL_SIZE,
                        updateSpeed: 10,
                        nextMove: 10,
                        xdirection: 0,
                        ydirection: 0,
                        renderer: <Head />,
                    },
                    food: {
                        position: [
                            randomPositions(0, constants.GRID_SIZE - 1),
                            randomPositions(0, constants.GRID_SIZE - 1),
                        ],
                        size: constants.CELL_SIZE,
                        renderer: <Food />,
                    },
                    body: {
                        size: constants.CELL_SIZE,
                        elements: [],
                        renderer: <Body />,
                    },

                }}
                systems={[Loop]}
                running={isGameRunning}

                onEvent={(e) => {
                    switch (e) {
                        case "game-over":
                            alert("Game over!");
                            setIsGameRunning(false);
                            return;
                    }
                }}

            />
            
            <ControlContainer>
                <RowContainer>
                    <MiniButton onPress={() => engine.current.dispatch("cima")}/>
                </RowContainer>
                <RowContainer>
                    <MiniButton onPress={() => engine.current.dispatch("esquerda")} />
                    <MiniButton onPress={() => engine.current.dispatch("direita")}/>
                </RowContainer>
                <RowContainer>
                    <MiniButton onPress={() => engine.current.dispatch("baixo")}/>
                </RowContainer>
            </ControlContainer>
        
        </Container>
    )
}