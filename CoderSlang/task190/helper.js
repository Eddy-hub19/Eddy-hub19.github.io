export const errorPractice = (name, surname) => {
  if (!name || !surname) {
    return new Error('something is missing');
  }

  console.log(`Hey, ${name} ${surname}! Welcome to the JavaScript error practice.`)
}
