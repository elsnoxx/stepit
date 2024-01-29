# TODO list

- TinkerCAD
    - obsah lekci
    - obsah projektu
    - obrazky
    - vytvorit komponentu pro odkazy na prihlaseni do trid


## Dulezite komponenty

    ``` javascript

        <ImageViewer imageUrl={"/img/tinkerCAD/tinkerCAD-login.avif"} altText={"Přihlášení do TinkerCADu"} />
    ```

    ``` javascript

    const beforeLesson = '/audacity';
    const afterLesson = '/audacity/audacity2';

    <LessonHeader beforeLesson={beforeLesson} afterLesson={afterLesson} />
    ```


# Github pages
- npm install gh-pages --save-dev
- add in package.json in scripts 
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build"