import { Injectable} from '@angular/core';
import { Article } from './article';

@Injectable ()
export class ServicioArticleService {
    private articles: Array<Article> = [

        new Article('React Native Architecture: Explained!', 'React Native is a modern framework that allows JavaScript to run on and interact with IOS and Android phones in the same way as native code does.This dynamic and powerful framework is enabling a host of opportunities for organisations that want to consolidate down their application architectures, and take a ‘write once deploy anywhere’ approach to application development for devices.But to many people it’s not really clear how it works. When you fire up the test project from the React Native website you can be left scratching your head. You have to think about the phone, the emulator, the JavaScript engine, the browser debugger and hell… where does the native even code run? To begin building apps with React Native we need to understand: The runtime architecture, The build architecture, The debugging architecture, Let’s see if we can look at these areas!','https://www.logicroom.co/react-native-architecture-explained/images/header.png','https://www.logicroom.co/react-native-architecture-explained/', '2017-07-15')
    ];

constructor () {}

devolverArticle(): Array<Article> {
  return this.articles;
}

getArticles() {
  return this.articles;
}
}