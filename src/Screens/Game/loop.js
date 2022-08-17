import constants from "../../constants";
const randomPositions = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default function GameLoop(entities, { events, dispatch }) {

  const head = entities.head;
  const food = entities.food;
  const body = entities.body;

  if (events.length) {
    events.forEach((e) => {
      switch (e) {
        case "cima":
          if (head.ydirection === 1) return;
          head.xdirection = 0;
          head.ydirection = -1;          
          return;
        case "direita":
          if (head.xdirection === -1) return;
          head.xdirection = 1;
          head.ydirection = 0;
          return;
        case "baixo":
          if (head.ydirection === -1) return;
          head.xdirection = 0;
          head.ydirection = 1;
          return;
        case "esquerda":
          if (head.xdirection === 1) return;
          head.xdirection = -1;
          head.ydirection = 0;
          return;
      }
    });
  }

  head.nextMove -= 1;
  if (head.nextMove === 0) {
    head.nextMove = head.updateSpeed;
    if (
      head.position[0] + head.xdirection < 0 ||
      head.position[0] + head.xdirection >= constants.GRID_SIZE ||
      head.position[1] + head.ydirection < 0 ||
      head.position[1] + head.ydirection >= constants.GRID_SIZE
    ) {
      dispatch("game-over");
    } else {
      body.elements = [[head.position[0], head.position[1]], ...body.elements];
      body.elements.pop();
      head.position[0] += head.xdirection;
      head.position[1] += head.ydirection;
      body.elements.forEach((el, idx) => {
        console.log({ el, idx });
        if (
          head.position[0] === el[0] &&
          head.position[1] === el[1] 
        )
          dispatch("game-over");
      });
      if (
        head.position[0] == food.position[0] &&
        head.position[1] == food.position[1]
      ) {
        body.elements = [
          [head.position[0], head.position[1]],
          ...body.elements,
        ];
        food.position = [
          randomPositions(0, constants.GRID_SIZE - 1),
          randomPositions(0, constants.GRID_SIZE - 1),
        ];
      }
    }
  }

  return entities;
}