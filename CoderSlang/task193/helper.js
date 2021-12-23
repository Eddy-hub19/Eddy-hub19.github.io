export const bakeMyCake = (ingredients) => {
  console.log(`Baking a cake!`)

  return {
    type: 'cake',
    from: ingredients
  }
}
