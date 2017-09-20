import { Injectable, EventEmitter} from '@angular/core';
import { Article } from '../articles/article';

@Injectable ()
export class ListArticleService {
    private articles: Array<Article> = [

        new Article('React Native Architecture: Explained!', 'React Native is a modern framework that allows JavaScript to run on and interact with IOS and Android phones in the same way as native code does.This dynamic and powerful framework is enabling a host of opportunities for organisations that want to consolidate down their application architectures, and take a ‘write once deploy anywhere’ approach to application development for devices.But to many people it’s not really clear how it works. When you fire up the test project from the React Native website you can be left scratching your head. You have to think about the phone, the emulator, the JavaScript engine, the browser debugger and hell… where does the native even code run? To begin building apps with React Native we need to understand: The runtime architecture, The build architecture, The debugging architecture, Let’s see if we can look at these areas!','https://www.logicroom.co/react-native-architecture-explained/images/header.png','https://www.logicroom.co/react-native-architecture-explained/', '2017-07-15'),
        new Article('10 Top Web Development Frameworks In 2017', 'As the Web matures and the versatility of online space rapidly grows, the way of building feature-rich application gets considerably more complicated. Nowadays it’s not that easy to satisfy customers with a basic online presence as everyone wants to see you updated as per the latest technological trends. However, the burden can be reduced largely if your developers are well-versed with the latest web development frameworks.','https://www.valuecoders.com/blog/wp-content/uploads/2017/07/Web-Development-Frameworks.png','https://www.valuecoders.com/blog/technology-and-apps/10-top-web-development-frameworks-businesses/', '2017-08-29'),
        new Article('Why is Python Growing So Quickly?', 'Python is used in a variety of purposes, ranging from web development to data science to DevOps, and it’s worth understanding what particular applications of Python have recently become more common.', 'https://www.visualstudio.com/wp-content/uploads/2016/06/python-1-562x309@2x-op.png', 'https://stackoverflow.blog/2017/09/14/python-growing-quickly/', '2017-09-20'),
    ];

constructor () {}

devolverArticle(): Array<Article> {
  return this.articles;
}
returnDescription(indice: number): Article { 
  return this.articles[indice];
}

getArticles() {
  return this.articles;
}


}