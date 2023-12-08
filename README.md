<div align="center">

<img src="https://raw.githubusercontent.com/HeyHeyChicken/ng-infinite-grid/main/.github/logo.png" alt="ng-infinite-grid" width="300">

**ng-infinite-grid** is fast and minimalist grid system for your Angular project.<br>
</div>
<div align="center">
<img width="820px" src="https://raw.githubusercontent.com/HeyHeyChicken/ng-infinite-grid/main/.github/video.gif">
</div>

## 👋 Introduction

**ng-infinite-grid** is fast and minimalist grid system for your Angular project.<br>
The philosophy behind ng-infinite-grid is to provide a lightweight and fast Bootstrap-style grid system.<br>
Your grid is responsive, and you can define the number of columns per line as you wish.<br>
```html
<container>
  <row>
    <column [xs]="12" [sm]="4" [md]="6" [lg]="5" [xl]="4" [xxl]="3">
      My first col content
    </column>
    <column [xs]="'auto'" text_lg="start">
      My second col content
    </column>
    <column [xs]="12" [sm]="4" [md]="2">
      My third col content
    </column>
  </row>
</container>
```

## 🔧 Prerequisites

[<img src="https://raw.githubusercontent.com/HeyHeyChicken/ng-infinite-grid/main/.github/nodeJSLogo.png" width="18" /> Node.js](//nodejs.org/)<br/>
[<img src="https://raw.githubusercontent.com/HeyHeyChicken/ng-infinite-grid/main/.github/npmLogo.png" width="18" /> npm](//npmjs.com/)<br/>
[<img src="https://raw.githubusercontent.com/HeyHeyChicken/ng-infinite-grid/main/.github/angularLogo.png" width="18" /> Angular](//angular.io/)<br/>

## ⬇️ Installation

This is a [Node.js](//nodejs.org/en/) module available through the [npm registry](//www.npmjs.com/).<br>
If this is a brand new project, make sure to create an Angular project first with the [`npx ng new myProjectName` command](//angular.io/tutorial/tour-of-heroes/toh-pt0).<br>
Installation is done using the [`npm install` command](//docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
npm i @heyheychicken/infinite-grid
```

## 💼 Features

<ul>
  <li>Focus on high performance.</li>
  <li>Text alignment per breakpoint.</li>
</ul>

```html
<container>
  <row>
    <column [text_xs]="'start'" [text_md]="'center'" [text_xl]="'end'">
      ...
    </column>
  </row>
</container>
```

<ul>
  <li>Use align-self utilities on column items to individually change their alignment on the y-axis.<br/>Choose from the following options: start, end, center, baseline, or stretch (browser default).</li>
</ul>

```html
<container>
  <row>
    <column [align_self_sm]="'start'" [align_self_lg]="'baseline'" [align_self_xxl]="'end'">
      ...
    </column>
  </row>
</container>
```

<ul>
  <li>Customizable number of columns per row.<br/>By default, the number of columns is set to 12.<br/>You can modify it as you wish with the "size" attribute on the "row" element.</li>
</ul>

```html
<container>
  <row [size]="24">
    <column [xs]="16">
      ...
    </column>
    <column [xs]="8">
      ...
    </column>
  </row>
</container>
```

## 💻 Compatibility

"ng-infinite-grid" has only been officially tested on Angular 17.

<br>
<br>

Created by [Antoine Duval (HeyHeyChicken)](//antoine.cuffel.fr) with ❤ and ☕ (chocolate) in [Mesnil-Panneville](//en.wikipedia.org/wiki/Mesnil-Panneville).