## Configuration
react-native  
yarn add axios

- No Android ao conectar na api do backend utilizando localhost, rodar o comando:
```
adb reverse tcp:3333 tcp:3333
```

## Resolvendo erro Unable to load script from assets index android bundle

- Crie uma pasta *assets* em *android/app/src/main*

- Execute o comando: 
`npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`

- Agora, feche as abas do terminal e execute novamente o comando:
`npx react-native run-android --variant=debug --deviceId emulator-5554`

## Resolvendo erro Error Duplicate resources

- Deletar os arquivos que estão duplicados nas pastas:

`
drawable-mdpi 
mipmap-xhdpi
mipmap-xxhdpi
raw
`

 **Importante!!:** antes de deletar o conteúdo destas pastas descritas acima, leia o log de erro e veja se o caminho da pasta é referido no log de erro, se alguma não estiver no log pode deixar intacta, por isso é bom prestar atenção no log de erro.


 ## Resolvendo problemas com a porta 8081

 https://medium.com/@shamshudein/react-native-run-the-packager-on-different-port-40470ee5ec72


 