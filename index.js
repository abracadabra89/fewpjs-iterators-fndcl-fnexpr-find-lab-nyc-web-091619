const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = record => {
  const thing = record.find(obj => obj.result === 'W');
  if (thing === undefined) return undefined;
  return thing.year;
};