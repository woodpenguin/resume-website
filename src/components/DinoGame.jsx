import { useRef, useEffect, useState } from "react";

export default function DinoGame() {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [score, setScore] = useState(0);

  // Dino properties
  const dino = {
    x: 50,
    y: 150,
    width: 44,
    height: 47,
    velocityY: 0,
    gravity: 1.5,
    isJumping: false,
    image: new Image()
  };

  const cactus = {
    x: 600,
    y: 160,
    width: 25,
    height: 40,
    speed: 6
  };

  dino.image.src = "https://i.imgur.com/2yYayZk.png"; // Free pixel dino

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const handleKeyDown = (e) => {
      if ((e.code === "Space" || e.code === "ArrowUp") && !dino.isJumping) {
        dino.velocityY = -20;
        dino.isJumping = true;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const detectCollision = () => {
      return (
        dino.x < cactus.x + cactus.width &&
        dino.x + dino.width > cactus.x &&
        dino.y < cactus.y + cactus.height &&
        dino.y + dino.height > cactus.y
      );
    };

    const update = () => {
      if (!isRunning) return;
      animationId = requestAnimationFrame(update);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#888";
      ctx.fillRect(0, 190, 600, 10);

      // Update dino
      dino.y += dino.velocityY;
      dino.velocityY += dino.gravity;
      if (dino.y > 150) {
        dino.y = 150;
        dino.velocityY = 0;
        dino.isJumping = false;
      }

      ctx.drawImage(dino.image, dino.x, dino.y, dino.width, dino.height);

      // Update cactus
      cactus.x -= cactus.speed;
      if (cactus.x < -cactus.width) {
        cactus.x = 600 + Math.random() * 200;
        setScore((prev) => prev + 1);
      }

      ctx.fillStyle = "green";
      ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height);

      // Score
      ctx.fillStyle = "black";
      ctx.font = "16px monospace";
      ctx.fillText("Score: " + score, 10, 20);

      // Collision
      if (detectCollision()) {
        setIsRunning(false);
        ctx.fillStyle = "red";
        ctx.font = "24px sans-serif";
        ctx.fillText("Game Over", 240, 100);
        cancelAnimationFrame(animationId);
      }
    };

    update();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRunning, score]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Dino Game</h1>
      <canvas ref={canvasRef} width={600} height={200} className="border-2 border-black" />
      {!isRunning && (
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => {
            window.location.reload();
          }}
        >
          Restart
        </button>
      )}
    </div>
  );
} 
