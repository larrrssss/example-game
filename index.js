async function preload() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve({ data: 123 }), 5000)
  );
  return data;
}

function loop() {
  console.log("HITTING GAME LOOP WOW");
}
