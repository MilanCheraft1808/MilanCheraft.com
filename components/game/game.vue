<template>
  <div class="cyberpunk-game-container">
    <div class="game-board">
      <div class="canvas-container">
        <canvas ref="canvas" class="game-canvas"></canvas>

        <div v-if="gameState === 'GAME_OVER'" class="game-overlay">
          <div class="overlay-content">
            <div class="game-over-text">_game over</div>
            <div class="score-box">
              <p>well done!</p>
              <p class="score-display">_score: {{ score }}</p>
            </div>
            <button @click="startGame" class="play-again-btn">play-again</button>
          </div>
        </div>

        <div v-if="gameState === 'WIN'" class="game-overlay">
          <div class="overlay-content">
            <div class="win-text">_you win!</div>
            <div class="score-box">
              <p>perfect!</p>
              <p class="score-display">_final score: {{ score }}</p>
            </div>
            <button @click="startGame" class="play-again-btn">play-again</button>
          </div>
        </div>

        <button v-if="gameState === 'IDLE'" @click="startGame" class="start-btn">start-game</button>
      </div>

      <div class="controls-panel">
        <div class="control-section">
          <div class="control-title">// use keyboard</div>
          <div class="control-title">// arrows to play</div>
          <div class="arrow-buttons">
            <div class="arrow-row">
              <button @click="handleArrowClick('up')" class="arrow-btn">▲</button>
            </div>
            <div class="arrow-row">
              <button @click="handleArrowClick('left')" class="arrow-btn">◄</button>
              <button @click="handleArrowClick('down')" class="arrow-btn">▼</button>
              <button @click="handleArrowClick('right')" class="arrow-btn">►</button>
            </div>
          </div>
        </div>

        <div class="control-section">
          <div class="control-title">// food left</div>
          <div class="food-dots">
            <div v-for="n in foodLeft" :key="n" class="food-dot"></div>
          </div>
        </div>

        <button @click="startGame" class="skip-btn">restart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const GRID_SIZE = 22
const CANVAS_WIDTH = 440
const CANVAS_HEIGHT = 440
const GAME_SPEED_MS = 120
const INITIAL_FOOD_GOAL = 10

const canvas = ref(null)
const gameState = ref('IDLE')
const snake = ref([])
const foodPosition = ref({})
const score = ref(0)
const foodLeft = ref(INITIAL_FOOD_GOAL)

let context
let direction = { x: 1, y: 0 }
let inputDirection = { x: 1, y: 0 }
let gameInterval

function startGame() {
  snake.value = [{ x: 10, y: 10 }]
  direction = { x: 1, y: 0 }
  inputDirection = { x: 1, y: 0 }
  score.value = 0
  foodLeft.value = INITIAL_FOOD_GOAL
  placeFood()

  clearInterval(gameInterval)
  gameInterval = setInterval(gameLoop, GAME_SPEED_MS)
  gameState.value = 'PLAYING'
}

function endGame(reason) {
  clearInterval(gameInterval)
  gameState.value = reason === 'WIN' ? 'WIN' : 'GAME_OVER'
}

function gameLoop() {
  if (gameState.value !== 'PLAYING') return
  update()
  draw()
}

function update() {
  if ((inputDirection.x !== 0 && inputDirection.x === -direction.x) ||
      (inputDirection.y !== 0 && inputDirection.y === -direction.y)) {
  } else {
    direction = { ...inputDirection }
  }

  const head = {
    x: snake.value[0].x + direction.x,
    y: snake.value[0].y + direction.y
  }

  const gridSize = CANVAS_WIDTH / GRID_SIZE

  if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
    endGame('GAME_OVER')
    return
  }

  // Check self collision
  for (let i = 1; i < snake.value.length; i++) {
    if (head.x === snake.value[i].x && head.y === snake.value[i].y) {
      endGame('GAME_OVER')
      return
    }
  }

  snake.value.unshift(head)

  if (head.x === foodPosition.value.x && head.y === foodPosition.value.y) {
    score.value += 10
    foodLeft.value--
    if (foodLeft.value === 0) {
      endGame('WIN')
    } else {
      placeFood()
    }
  } else {
    snake.value.pop()
  }
}

function draw() {
  if (!context) return

  const canvasGridSize = CANVAS_WIDTH / GRID_SIZE

  context.fillStyle = '#1e293b'
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  context.strokeStyle = 'rgba(6, 182, 212, 0.1)'
  context.lineWidth = 1
  for (let i = 0; i <= canvasGridSize; i++) {
    context.beginPath()
    context.moveTo(i * GRID_SIZE, 0)
    context.lineTo(i * GRID_SIZE, CANVAS_HEIGHT)
    context.stroke()
    context.beginPath()
    context.moveTo(0, i * GRID_SIZE)
    context.lineTo(CANVAS_WIDTH, i * GRID_SIZE)
    context.stroke()
  }

  if (foodPosition.value && foodPosition.value.x !== undefined && foodPosition.value.y !== undefined) {
    const foodX = foodPosition.value.x * GRID_SIZE + GRID_SIZE / 2
    const foodY = foodPosition.value.y * GRID_SIZE + GRID_SIZE / 2
    const radius = GRID_SIZE / 2.5

    const gradient = context.createRadialGradient(foodX, foodY, 0, foodX, foodY, radius * 2)
    gradient.addColorStop(0, 'rgba(6, 182, 212, 0.8)')
    gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.4)')
    gradient.addColorStop(1, 'rgba(6, 182, 212, 0)')

    context.fillStyle = gradient
    context.beginPath()
    context.arc(foodX, foodY, radius * 2, 0, 2 * Math.PI)
    context.fill()

    context.fillStyle = '#06b6d4'
    context.beginPath()
    context.arc(foodX, foodY, radius, 0, 2 * Math.PI)
    context.fill()
  }

  snake.value.forEach((part, index) => {
    const x = part.x * GRID_SIZE
    const y = part.y * GRID_SIZE
    const isHead = index === 0

    context.shadowColor = '#10b981'
    context.shadowBlur = isHead ? 15 : 8

    const segmentGradient = context.createLinearGradient(x, y, x + GRID_SIZE, y + GRID_SIZE)
    if (isHead) {
      segmentGradient.addColorStop(0, '#10b981')
      segmentGradient.addColorStop(1, '#059669')
    } else {
      const intensity = 1 - (index / snake.value.length) * 0.5
      segmentGradient.addColorStop(0, `rgba(16, 185, 129, ${intensity})`)
      segmentGradient.addColorStop(1, `rgba(5, 150, 105, ${intensity})`)
    }

    context.fillStyle = segmentGradient
    context.fillRect(x + 1, y + 1, GRID_SIZE - 2, GRID_SIZE - 2)

    context.shadowBlur = 0
  })
}

function placeFood() {
  const gridSize = CANVAS_WIDTH / GRID_SIZE
  let newFoodPosition
  do {
    newFoodPosition = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    }
  } while (snake.value.some(part => part.x === newFoodPosition.x && part.y === newFoodPosition.y))
  foodPosition.value = newFoodPosition
}

function handleKeydown(e) {
  if (gameState.value !== 'PLAYING') return
  e.preventDefault()

  switch (e.key) {
    case 'ArrowUp':
      if (direction.y === 0) inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (direction.y === 0) inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (direction.x === 0) inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (direction.x === 0) inputDirection = { x: 1, y: 0 }
      break
  }
}

function handleArrowClick(dir) {
  if (gameState.value !== 'PLAYING') return

  switch (dir) {
    case 'up':
      if (direction.y === 0) inputDirection = { x: 0, y: -1 }
      break
    case 'down':
      if (direction.y === 0) inputDirection = { x: 0, y: 1 }
      break
    case 'left':
      if (direction.x === 0) inputDirection = { x: -1, y: 0 }
      break
    case 'right':
      if (direction.x === 0) inputDirection = { x: 1, y: 0 }
      break
  }
}

onMounted(() => {
  const c = canvas.value
  c.width = CANVAS_WIDTH
  c.height = CANVAS_HEIGHT
  context = c.getContext('2d')

  draw()

  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  clearInterval(gameInterval)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.cyberpunk-game-container {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  border: 2px solid #06b6d4;
  border-radius: 20px;
  padding: 30px;
  font-family: 'Courier New', monospace;
  color: #e2e8f0;
  box-shadow:
      0 0 50px rgba(6, 182, 212, 0.3),
      inset 0 0 50px rgba(6, 182, 212, 0.1);
}

.game-board {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.canvas-container {
  position: relative;
  background: #1e293b;
  border: 2px solid #334155;
  border-radius: 15px;
  padding: 20px;
  box-shadow:
      0 0 30px rgba(6, 182, 212, 0.2),
      inset 0 0 30px rgba(0, 0, 0, 0.5);
}

.game-canvas {
  display: block;
  border-radius: 10px;
  image-rendering: pixelated;
  box-shadow:
      0 0 20px rgba(16, 185, 129, 0.3),
      inset 0 0 20px rgba(0, 0, 0, 0.3);
}

.game-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
}

.overlay-content {
  text-align: center;
  color: #06b6d4;
}

.score-box {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid #334155;
  border-radius: 15px;
  padding: 20px;
  margin: 20px 0;
}

.score-box p {
  margin: 0;
  color: #e2e8f0;
}

.game-over-text, .win-text {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 0 20px currentColor;
}

.score-display {
  font-size: 1.5rem;
  margin-top: 10px;
  color: #06b6d4;
}

.play-again-btn, .start-btn {
  background: linear-gradient(135deg, #1e293b, #334155);
  border: 2px solid #06b6d4;
  color: #e2e8f0;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

.play-again-btn:hover, .start-btn:hover {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: #0f172a;
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.6);
}

.start-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.controls-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
}

.control-section {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid #334155;
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.control-title {
  color: #06b6d4;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.arrow-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.arrow-row {
  display: flex;
  gap: 5px;
}

.arrow-btn {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #1e293b, #334155);
  border: 2px solid #475569;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
}

.arrow-btn:hover {
  border-color: #06b6d4;
  background: linear-gradient(135deg, #334155, #475569);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
  transform: translateY(-1px);
}

.arrow-btn:active {
  transform: translateY(0);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
}

.food-dots {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.food-dot {
  width: 12px;
  height: 12px;
  background: #06b6d4;
  border-radius: 50%;
  box-shadow:
      0 0 10px rgba(6, 182, 212, 0.6),
      inset 0 0 5px rgba(255, 255, 255, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.skip-btn {
  background: transparent;
  border: 2px solid #475569;
  color: #94a3b8;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  align-self: center;
}

.skip-btn:hover {
  border-color: #06b6d4;
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .game-board {
    flex-direction: column;
    align-items: center;
  }

  .controls-panel {
    width: 100%;
    max-width: 400px;
  }

  .control-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>