---
title: 'Two Forms of Pre-rendering Two Forms of Pre-rendering Two Fo'
date: '2020-01-01'
author: 'ahmedali7o1'
category: 'Uncategorized'
description: 'When to Use Static Generation v.s. Server-side RenderingWhen to Use Static Generation v.s. Server-side RenderingWhen to Use Static Generation v.s. Server-side RenderingWhen to Use Static Generation v.s. Server-side Rendering Use Static Generatissssss'
---

## Welcome to NodeArch

NodeArch is a Node.js `backend framework` targeting to solve the design and architectural problems when creating Node.js APPs for the backend. Using Typescript and dependency injection, we bring the concepts we used to in languages like Java, C# etc. While still getting the best out of Javascript flexibility and Node.js non-blocking I/O model. There is also a big focus on wiring everything together, so our intention is not to reinvent/rewrite the tools/frameworks we already know and use. Instead, our target is to wire everything together and leverage the opensource community behind Node.js and Javascript. You can think of NodeArch as the glue that links all your tools and libraries together and helps create a readable, maintainable and scalable application architecture. 


## Links

* [Homepage](https://nodearch.io)
* [Documentation](https://nodearch.io/docs)

## 📦 Install

You need to install the NodeArch command-line interface to be able to generate new apps. Start by Running the following command in your terminal to install the CLI globally.

```sh
npm i -g @nodearch/cli
```

```javascript
console.log('asdasdasd');
```

```javascript
console.log('Hello World');
```
`;

Once installed, you can run `nodearch -h` in your terminal to see the usage.

## 🚀 Usage

```sh
# start your app
nodearch start

# start your app in Watch mode
nodearch  start -w

# run test cases
nodearch test

# run test cases in watch mode
nodearch test -w

# build your app ( only required in production mode )
nodearch build
```
```bash
❯ nodearch -h
Usage: nodearch <command> [options]

Commands:
  nodearch build  Build NodeArch app                                [aliases: b]
  nodearch new    Generate new NodeArch APP                         [aliases: n]
  nodearch start  Start NodeArch APP                                [aliases: s]
  nodearch test   run automated testing                             [aliases: t]

Options:
  -y, --notify   turn desktop notifier on or off       [boolean] [default: true]
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Examples:
  nodearch new    generates new app
  nodearch build  build existing app from the current directory
  nodearch start  starts existing app from the current directory
```

for all the options, please check the [documentation](https://nodearch.io/docs)

## 🤝 Contributing
Contributions, issues and feature requests are welcome! If you like the idea and want to improve, add, or suggest something, please use the GitHub Issue tracker to communicate your thoughts with us.

## 👷 Development
### Prerequisites
* [Node.js](https://nodejs.org/en/download/)
* [Microsoft Rush](https://rushjs.io/pages/intro/get_started/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

```jsx
import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';
import { PostCardParams } from '../types';


export default function PostCard(params: PostCardParams) {
  return (
    <div className="max-w-lg px-10 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600"><Date dateString={params.date} /></span>
        <a className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">{params.category}</a>
      </div>
      <div className="flex flex-col mt-2 h-32 md:h-44">
        <Link href={`/posts/${params.id}`}>
          <a className="line-clamp-2 text-lg md:text-xl lg:text-2xl text-gray-700 font-bold hover:text-gray-600">{params.title}</a>
        </Link>
        <p className="line-clamp-2 md:line-clamp-4 mt-2 text-gray-600">{params.description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link href={`/posts/${params.id}`}>
          <a className="text-blue-600 hover:underline">Read more</a>
        </Link>
        <div>
          <a className="flex items-center space-x-2" href="#">
            <Image 
              src={params.author.avatar}
              className="rounded-full"
              alt="avatar"
              width={32}
              height={32}
            />
            <h1 className="text-gray-700 font-bold">{params.author.name}</h1>
          </a>
        </div>
      </div>
    </div>
  )
}
```

### Setup
Clone the project on your local machine, using the following command.
```bash
git clone https://github.com/BlueMax-IO/nodearch.git
```

Switch to the repo directory, and then install dependencies
```bash
rush install
```

Now build the project
```bash
rush build
```

### Usage

```bash
# Build the project
rush build

# Run test cases
rush test

# Add NPM package as a dependency
rush add
```

For more details on how to use Rush to add packages, commands, build and run stuff. check it on the official [Rush website](https://rushjs.io/pages/intro/welcome/)

## Show your support

Give a ⭐️ if this project helped you! 

[![Star on GitHub](https://img.shields.io/github/stars/bluemax-io/nodearch?style=social)](https://github.com/bluemax-io/nodearch/stargazers)

## 📝 License

Copyright © 2020 [BlueMax IO](https://github.com/BlueMax-IO).<br />
This project is [MIT](https://github.com/BlueMax-IO/nodearch/blob/master/LICENSE) licensed.

***

Open Source Software made with ❤️ for the Node.js Community.<br />
© BlueMax IO. All rights reserved. [Ahmed Ali](https://github.com/AhmedAli7O1)