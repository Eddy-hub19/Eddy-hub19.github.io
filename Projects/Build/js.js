const tw = document.getElementById("typewriter")
const wrap = document.getElementById("wrap")

function outputsize(type = false) {
  //console.log(wrap.scrollHeight, wrap.scrollTop, wrap.clientHeightm);
  /*
  
  if (
    type === false &&
    wrap.scrollHeight - wrap.scrollTop !== wrap.clientHeight
  ) return false;
*/
  //if (type === true || (wrap.scrollTop == 0 && wrap.clientHeight == 0)) {
  //tw.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  /*
  wrap.scroll({
    top: wrap.scrollHeight,
    behavior: "smooth"
  });
*/
  //wrap.scrollTop = wrap.scrollHeight;
  wrap.scrollTo({ top: wrap.scrollHeight, behavior: "smooth" })
  //}
}
outputsize(true)
new ResizeObserver(outputsize).observe(tw)

var typewriter = new Typewriter(tw, {
  loop: false,
})

typewriter
  .typeString(
    `Chapter 1 
    <br/><br/>
    Once upon a time in Japan, there was a girl named Sakura.  She ran out very early to see a pall of smoke billowing over the great sea.  She also liked to go to the sea and touch the warm and friendly water with her hands, and pluck the most beautiful and amazing flowers of their area, which were the symbol of her country.  
    These flowers symbolized friendliness, freedom and lightness. A sense of peace and tranquility reigned in this town.  

<br/><br/>
And one day, merchants came to this town.  A girl of small stature, ran to the tavern, where they sold cute and interesting, and most importantly special toys.  And looking through the various products she liked one.  This toy was made of wood.  And covered with shiny lacquer, she wanted to buy it, but the girl did not have so much money.  She contemplated with her sweet eyes on this toy.  Her heart filled with regret.  As she went home upset, the mother noticed something was wrong.  
And the mother asked:
 - Miko
 - Miko dear, what's wrong?
 Smiling without giving the appearance of sadness the girl said:
 - It's okay, mom.  
And went to her room.

Her parents gave her money every month, but Miko put it aside for that incredible toy and hoped that someone else wouldn't buy it.  The girl was also fond of playing the violin.  Watching a violinist play in the square she would swoon.  They played mesmerizing and very unusual melodies.  That brought peace and tranquility to the soul.  And after a hard day, Miko would come home.  Gathering around the table, they ate dinner and went to bed.  When her father finished writing a book at that time, Miko was wrapped in a blanket and sleeping soundly.

 He approached her crib.
 -Good night my girl.  Said the father and kissed his daughter gently on the forehead.

<img class='img_L' src='./spring_sakura_flower_blossom_floral_japanese_cherry_icon_127307.svg' style='shape-outside: url(./spring_sakura_flower_blossom_floral_japanese_cherry_icon_127307.svg);'>
<br/><br/>
Chapter 2
<br/><br/>

The next day the family wanted to go to the hiroshiyami garden to celebrate Sakura Day.

The sun was still out, already Miko was looking out the window at the amazing scenery of Japan
When she stepped outside, a quiet breeze fluttered her hair and she watched then as their town as stopped in motion, no one was visible on the way to the Garden ... also there was a majestic silence.

In the local square there was a fountain, which was a flower shape that symbolized the town.

Miko decided to go to the mysterious garden, where miracles happened every year.

The girl bravely walked out of the town and went on her own to find adventure🌸

<img class='img_L' src='https://happy358.github.io/Images/Alice/93CC8112-EFAD-4AB3-A86C-821AC016CAD7.png' style='shape-outside: url(https://happy358.github.io/Images/Alice/93CC8112-EFAD-4AB3-A86C-821AC016CAD7.png);'>
<br/><br/>

Chapter 3
<br/><br/>

When Miko's parents woke up they saw that the door to Miko's room was open.

Immediately the parents went into the room and were surprised!  Where could Miko go?

Hiroko getting dressed told Hitsumi to calm down.

She must have wanted to get ahead of us, so get dressed and follow her said father

...

Meanwhile Miko was walking towards Sada and enjoying the beauty of the incredible mountains and forests she saw, the lake near the forest and the mountains higher than the sky.
 The sun was already out and Miko reached the beginning of the Garden, but she didn't go in, she kept turning back and contemplating the beauty of their city.
 She remembered what her father had told her about the symbols of Japan, she should not go into the Garden herself, but she dismissed the thoughts and walked into Hiroshiyami

 In the old days there was a building dedicated to Kung Fu martial arts and Jioji Tsu, where outstanding sledders from all corners of the earth fought after the last congress the place was closed and some important sensei said to demolish the building, which was like a second home for the masters.

 He planted over 2,000 Sakas on the site.
 Different colors, and after 80 years they have grown and every year please the people of Japan with their interesting-diverse colors, and also on this wonderful holiday, every citizen has the right to go to the Mountain from which you could look at all the greatness of Japan and see a large structure in the form of Sakura, which characterized Japan and showed the real value of people.

 In Japan everyone was treated as great people because they were taught to respect their elders and the lesser, no matter what their family background and wealth, and so there is always peace and quiet and people are friendly and affectionate to others.


 Chapter 4
 <br/><br/>

 <img class='img_L' src='./japan_monk_asia_religion_buddhist_zen_japanese_traditional_icon_127318.svg' style='shape-outside: url(./japan_monk_asia_religion_buddhist_zen_japanese_traditional_icon_127318.svg);'>

 As Miko stood and pondered her father's words, a boy who looked older than her came into her view

 "He doesn't look like one of our own thought to herself, but he's so nice" Miko.

 - Kumiko: Hey you!
 - Miko: Are you here to see me?
 - Kumiko: Is there someone else here?
 - Miko: Miko looked around to make sure she was alone.
 - Kumiko: Kumiko said you know where the entrance to the big mountain is?
 - Miko: No, I don't.
 - Kumiko: Do you want to come with me?
 - Miko: No, I'm not allowed to leave my town.
 - Kumiko: Are you small?
 - Miko: She bowed her head down low and said: "I'm not little!"
 - Kumiko: Okay, if you don't want to go, I'll go!
 - Miko: Miko turned around and wanted to leave the garden, but then she didn't think twice and told him to go.
 - Kumiko: He took her hand and they went together to look for the entrance to the mountain.
 - Miko: I was thinking, why would he go to the mountain?  Why did he take my hand
`
  )
  /*
  .pauseFor(2000)
  .typeString(
    "<br/><br/>test"
  )
  .pauseFor(2000)
*/
  .start()
