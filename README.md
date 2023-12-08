<div align="center">

<img src="https://raw.githubusercontent.com/HeyHeyChicken/Angular-Wizz/main/.github/logo.png" alt="Wizz" width="300">

**Angular Wizz** is a component that allows you to implement MSN's Wizz in your Angular applications.<br>
</div>
<div align="center">
<img width="820px" src="https://raw.githubusercontent.com/HeyHeyChicken/Angular-Wizz/main/.github/video.gif">
</div>

## 👋 Introduction

**Angular Wizz** is a component that allows you to implement MSN's Wizz in your Angular applications.<br>
You can add it to your applications for fun, hide an easter egg or sign your work 🤣

## 🔧 Prerequisites

[<img src="https://raw.githubusercontent.com/HeyHeyChicken/Angular-Wizz/main/.github/nodeJSLogo.png" width="18" /> Node.js](//nodejs.org/)<br/>
[<img src="https://raw.githubusercontent.com/HeyHeyChicken/Angular-Wizz/main/.github/npmLogo.png" width="18" /> npm](//npmjs.com/)<br/>
[<img src="https://raw.githubusercontent.com/HeyHeyChicken/Angular-Wizz/main/.github/angularLogo.png" width="18" /> Angular](//angular.io/)<br/>

## ⬇️ Installation

This is a [Node.js](//nodejs.org/en/) module available through the [npm registry](//www.npmjs.com/).<br>
If this is a brand new project, make sure to create an Angular project first with the [`npx ng new myProjectName` command](//angular.io/tutorial/tour-of-heroes/toh-pt0).<br>
Installation is done using the [`npm install` command](//docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
npm i @heyheychicken/angular-wizz
```

## 🚀 Usage

1) Import the `WizzModule` in your standalone component our in your app module.
```ts
@Component({
  ...
  standalone: true,
  imports: [..., WizzModule],
  ...
})
```

2) Add the WizzComponent in your `app.component.html` file.
```html
...
<wizz #wizzComponent></wizz>
...
```

3) Just write `WIZZ` (in uppercase) anywhere on your keyboard when you are using you app.

4) (Optional) If you wan't to manualy trigger the wizz, just implement it in your  `app.component.ts` file.
```ts
  //#region Attributes

  @ViewChild('wizzComponent') wizzComponent?: WizzComponent;

  //#endregion

  //#region Function

  protected wizzButtonClicked(): void{
    this.wizzComponent?.wizz();
  }

  //#endregion
```


## 💻 Compatibility

"Angular Wizz" has only been officially tested on Angular 17.

<br>
<br>

Created by [Antoine Duval (HeyHeyChicken)](//antoine.cuffel.fr) with ❤ and ☕ (chocolate) in [Mesnil-Panneville](//en.wikipedia.org/wiki/Mesnil-Panneville).