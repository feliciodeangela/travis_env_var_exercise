const value=process.env.VALUE;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`${value}`);
    await sleep(5000);
  }
}

main();
