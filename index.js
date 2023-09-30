async function preload() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve({ data: 123 }), 5000)
  );
  return data;
}

let i = 0;

function setup(preloadedData) {
  i = preloadedData.data;
}

function loop() {
  i++;

  console.log("HITTING GAME LOOP", i % 5);
  console.log("HITTING GAME LOOP WOW");
}
