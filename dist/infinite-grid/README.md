<div align="center">
  
<img width="200" src="https://raw.githubusercontent.com/HeyHeyChicken/ng-infinite-grid/main/projects/infinite-grid/logo.png" />
<br/>
<br/>
Fast and minimalist grid system for your Angular project.
</div>
<br/>

```html
<container>
  <row>
    <column [xs]="12" [sm]="4" [md]="6" [lg]="5" [xl]="4" [xxl]="3">
      My first col content
    </column>
    <column [xs]="auto">
      My second col content
    </column>
    <column [xs]="12" [sm]="4" [md]="2">
      My third col content
    </column>
  </row>
</container>
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install @heyheychicken/infinite-grid
```

## Features

* Focus on high performance
* Customizable number of columns per row<br/>
  By default, the number of columns is set to 12. You can modify it as you wish with the "size" attribute on the "row" element.
```html
<container>
  <row size="24">
    <column [xs]="16">
      ...
    </column>
    <column [xs]="8">
      ...
    </column>
  </row>
</container>
```

## Philosophy

The philosophy behind ng-infinite-grid is to provide a lightweight and fast Bootstrap-style grid system.<br/>
Your grid is responsive, and you can define the number of columns per line as you wish.

## Contributing

The ng-infinite-grid project welcomes all constructive contributions. Contributions take many forms,
from code for bug fixes and enhancements, to additions and fixes to documentation, etc.

## License

MIT