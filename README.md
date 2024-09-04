# CSS Haikus

```
CSS Haikus
an experimental thing
to celebrate styles.
```

## About 
CSS Haikus is a collection of eight haikus written as CSS rules. Each haiku is rendered with its own written style.

1. #clearky
2. #spacy
3. #whelming
4. #inverted
5. #thin
6. #distant
7. #panic
8. #dissonance

The haikus appear in between the curly braces, so the selectors are not part of the haiku. Instead, they serve as titles.

I have taken liberty in how the units and numbers are pronounced to fit the 5-7-5 syllable haiku structure. As such, I have written them out verbally to display to avoid confusion.

## Why CSS Haikus?

I got into haikus one summer and thought it might be fun to write haikus in CSS and see what sort of styles are possible with that limitation.

The substance of the idea grew on me and I tried to incorporate a distinct theme in each haiku I wrote. As a collection, they form a narrative around the dissociation, anxiety, and depression that I have faced as a fact of being alive.

Each haiku’s visual effect aims to be a little vignette of feeling associated with such emotional turmoil and confusion, while the written CSS is practically meaningless in terms of being written in English. This further resonates with the confusion I’ve felt when trying to understand and express my own emotions.

## The Process

As I have previously written, I got into writing some haikus. Mainly they were observations of objects or situations. For some masochistic reason, I thought: "What if I wrote a haiku with CSS so I could see the text and also the styles that CSS renders." It seemed like a random passing thought, but here we are.

I decided to write eight haikus in Cascading Style Sheets programming language. At first, I struggled to think of which properties could be used since the haiku has a 5-7-5 syllable limitation. 

Eventually, I caved and figured that if I was using CSS, I could leverage all of CSS's features, including variables and animations. This kind of felt like a hack, but ¯\_(ツ)_/¯, what're'ya gonna do?

I started with a simple one, which would later be called `#clearsky`. At first, I tried to force some narrative with each haiku but I soon realized that CSS is not a very expressive language. However, I also learned that how CSS is rendered *can* be expressive, especially when it comes to text. This text-forward expression is right up my alley, as I am fond of typography. I followed this excitement and ended up having eight haikus whose styles are an exercise in static and animated web typography.

As I wrote one after the other, I noticed an aesthetic theme. Aside from `#clearsky`, each haiku's text is distorted, transformed, or otherwise difficult to read--the primary function of a haiku is to be read. These moods seemed to come from my own emotional experiences dealing with some less-than-ideal mental health problems. From this point, I tried to come up with a quippy name for each haiku. 

Moreover, `#clearsky` is the first and simplest haiku in this series. It echoes the sentiment of the phrase "blue sky" which comes from anxiety self-regulation in the form of meditation. `#clearsky` is always there, even amidst the chaos and turmoil of the other seven haikus.

### The Prototype

Since I wanted to focus on writing them without building out a whole website, I created a [pen on CodePen, where I drafted my haikus](https://codepen.io/vernonian/pen/KKjyXJK).

## The Haikus

### `#clearsky`
```
#clear {
  background: dodgerblue;
  text-shadow: 0 0 1em;
  color: floralwhite;
}
```