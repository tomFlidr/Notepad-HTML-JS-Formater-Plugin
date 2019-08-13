# Notepad++ HTML/JS Formater Plugin
- Notepad++ HTML/JS Formater Plugin for jN Plugin (JScript plugin, originaly 'npp scripting')
- Proudly based on sources from http://jsbeautifier.org/

## Usage
- Instal plugin **jN (Notepad++ Javascript Scripting**
  - for Notepad++ v7.x and newer - install plugin via Notepad++ plugins manager
    - latest tested version: `jN Notepad++ Plugin 2.2.185.5`
    - the newest plugin version has filesystem structure: 
      - `C:\Program Files (x86)\Notepad++\plugins\jN\jN.dll`
      - `C:\Program Files (x86)\Notepad++\plugins\jN\jN\\...`
  - for older Notepad++ v6.x and older - install plugin manually from [google code archive](https://code.google.com/archive/p/jn-npp-plugin)
    - latest tested version: `[jN_2.0.116.zip]`(https://code.google.com/archive/p/jn-npp-plugin/downloads)
    - the older plugin version has different filesystem structure: 
      - `C:\Program Files (x86)\Notepad++\plugins\jN.dll`
      - `C:\Program Files (x86)\Notepad++\plugins\jN\\...`
- Place `HTML JS Formater.js` file into directory:
  - for Notepad++ v7.x and newer:
    - Windows x64: `C:\Program Files (x86)\Notepad++\plugins\jN\jN\includes\HTML JS Formater.js`
    - Windows x86:       `C:\Program Files\Notepad++\plugins\jN\jN\includes\HTML JS Formater.js`
  - for Notepad++ v6.x and older:
    - Windows x64: `C:\Program Files (x86)\Notepad++\plugins\jN\includes\HTML JS Formater.js`
    - Windows x86:       `C:\Program Files\Notepad++\plugins\jN\includes\HTML JS Formater.js`
- Restart Notepad++
- Select all (press `CTRL + A`)
- Format code (press `CTRL + SHIFT + J` or `Main Menu -> HTML/JS Formater -> Format HTML/JS`)

### HTML/JS code before:
![Printscreen](https://raw.githubusercontent.com/tomFlidr/Notepad-HTML-JS-Formater-Plugin/master/before.jpg)

### Main Menu > HTML/JS Formater > Format HTML/JS > Click (or CTRL + SHIFT + J)

### HTML/JS code after:
![Printscreen](https://raw.githubusercontent.com/tomFlidr/Notepad-HTML-JS-Formater-Plugin/master/after.jpg)
