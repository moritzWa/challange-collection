const array = ["Moritz", "is", "the", "daily", "code", "challenge", "master"]

makeFrame = arrayString => {
  let longestString = Math.max(...arrayString.map(el => el.length))
  const printTopBottom = () => console.log("*".repeat(longestString + 4))
  printTopBottom()
  arrayString.forEach(i => {
    wordLangth = i.length
    console.log(`* ${i}${" ".repeat(longestString - wordLangth)} *`)
  })
  printTopBottom()
}

makeFrame(array)
