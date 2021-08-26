[![Netlify Status](https://api.netlify.com/api/v1/badges/4aa06b5a-9d64-4961-b795-21cc51785031/deploy-status)](https://app.netlify.com/sites/nostalgic-einstein-acdfc2/deploys)

[1. How to use:](#1-how-to-use)

[2. SCSS](#2-scss)

[2.1 Colors](#21-colors)

[2.2 Fonts](#22-fonts)

# 1. How to use:

`npm run start` - starts a dev server on locahost:8080.
`npm run deploy` - used by server to build files. Not used on a dev machine.
`npm run dev` - Runs a build on a dev machine. Use (VSCode) Live Server to view output.
`npm run port` - Creates a tunnel through [Ngrok](https://ngrok.com/).
`npm run sass` - Runs a sass compiler, used to debug scss. Creates a css folder in src. (Ignored by git).

#### 2. SCSS

##### 2.1 Colors

- In the `_colors.scss file` there are 2 varibales to change `$adjust-h-clr: 190;` and `$adjust: 150deg;`.
- `$adjust-h-clr:` - adjusts the main color hue. (0 -360 deg).
- `$adjust:` - adjusts the secondary color hue. (0 - 360 deg).

#### 2.2 Fonts

- In the `_typography.scss` file there is a map showing all the font pairings.

```scss
$available-font-maps: (
  1: fonts.$playfair-map,
  2: fonts.$lora-map,
  3: fonts.$oxygen-map,
  4: fonts.$arvo-map,
  5: fonts.$work-sans-map,
  6: fonts.$oswald-map,
  7: fonts.$unica-map,
  8: fonts.$vollkorn-map,
  9: fonts.$dosis-map,
  10: fonts.$estaban-map,
  11: fonts.$poppins-map,
  12: fonts.$fira-sans-map,
);
```

- The `$font-theme: 4;` variable changes the font pairing/ (1-12).
