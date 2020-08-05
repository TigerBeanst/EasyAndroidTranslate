# EasyAndroidTranslate
A tool to translate Android App easily.

When I translate [Tap,Tap](https://github.com/KieronQuinn/TapTap), it took me some time to compare which strings were added, which were updated.

I thought it was a hassle, so I wrote this little tool.

# Demo
[EasyAndroidTranslate](https://eat.jakting.com/)

Or build your own one use this repo.

# How to use
## The First Time to translate
1. Just paste your `source` strings.xml content into the left input box. *For example: [RnOpenGApps strings.xml](https://raw.githubusercontent.com/hjthjthjt/RnOpenGApps/master/app/src/main/res/values/strings.xml)*

2. Then press the button `Start Translating`, you will see a table with extracted strings.

3. Input the translated strings into the table.

4. Press the button `Generate Strings` to get a useful strings.xml you want. **Click the copy button to make it easier**

## Have been translated
1. Paste your `source` strings.xml content in the left input box.(Same as above)

2. Then paste your `translated` strings.xml content into the right input box.

3. Press the button `Update Translation`, you will see a table with extracted strings.

4. Modify the translated strings in the table(Maybe the text is different). And complete the new strings that you didn't translate. (Notice: `Yellow items`: The translated text is the same as the source text. `Red items`: not translated)

5. Press the button `Generate Strings` to get a useful strings.xml you want. **Click the copy button to make it easier**

# Previews
![start_translating](https://github.com/hjthjthjt/EasyAndroidTranslate/raw/master/image/start_translating.gif)

![update_translation](https://github.com/hjthjthjt/EasyAndroidTranslate/raw/master/image/update_translation.gif)

## Setup
```
npm install
npm run serve

npm run build
```
