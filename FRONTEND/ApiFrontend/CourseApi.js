const CourseApi = [
    {
        Id : 1,
        Name: 'C Programming',
        Description: "The C programming language is a procedural and general-purpose language that provides low-level access to system memory. A program written in C must be run through a C compiler to convert it into an executable that a computer can run.",
        Image: require('../assets/C_Programming.jpg'),
        chapter:{
                chapter_01 : " chapter_01 : 'Introduction' ",

                chapter_02 : " chapter_02 : 'If/Else Condition' ",

                chapter_03 : " chapter_03 : 'Loops' ",

                chapter_04 : " chapter_04 : 'Switch Cases' ",

                chapter_05 : " chapter_05 : 'Array Concept' ",

                chapter_06 : " chapter_06 : 'Matrics Concepts' ",

                chapter_07 : " chapter_07 : 'String Concept' ",

                chapter_08 : " chapter_08 : 'Functions' ",

                chapter_09 : " chapter_09 : 'Pointer' ",

                chapter_10 : " chapter_10 : 'File I/O' ",

        }
    },
    {
        Id : 2,
        Name: 'C++ Programming',
        Description: "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs. C++ is portable and can be used to develop applications that can be adapted to multiple platforms. C++ is fun and easy to learn!",
        // Image: require('../assets/C++.png'),
        chapter:{
                chapter_01 : " chapter_01 : 'Introduction' ",

                chapter_02 : " chapter_02 : 'If/Else Condition' ",

                chapter_03 : " chapter_03 : 'Loops' ",

                chapter_04 : " chapter_04 : 'Switch Cases' ",

                chapter_05 : " chapter_05 : 'Array Concept' ",

                chapter_06 : " chapter_06 : 'Functions' ",

                chapter_07 : " chapter_07 : 'Pointer' ",

                chapter_08 : " chapter_08 : 'Introduction To OOPS' ",

                chapter_09 : " chapter_09 : ' Objects Concept ,Inheritance , Encapsulation , Abstraction , Polymorphism' ",

                chapter_10 : " chapter_10 : 'Pointer' ",


        }
    },
    {
        Id : 3,
        Name: 'Java Programming',
        Description: "Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages.",
        Image: require('../assets/java.jpg'),
        chapter:{
                chapter_01 : " chapter_01 : 'Introduction' ",

                chapter_02 : " chapter_02 : 'If/Else Condition' ",

                chapter_03 : " chapter_03 : 'Loops' ",

                chapter_04 : " chapter_04 : 'Switch Cases' ",
                
                chapter_05 : " chapter_05 : 'Array Concept' ",

                chapter_06 : " chapter_06 : 'Functions' ",

                chapter_07 : " chapter_07 : 'String Concept' ",

                chapter_08 : " chapter_08 : 'Functions' ",
                
                chapter_09 : " chapter_09 : 'Pointer' ",

                chapter_10 : " chapter_10 : 'Full Details Of Abstraction,Polymorphism,Inheritance,Encapsulation and Other OOPS Concepot' ",

        }
    },
    {
        Id : 4,
        Name: 'Web Developement',
        Description: "Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or 'devs', do this by using a variety of coding languages.",
        Image: require('../assets/WEB.jpg'),
        chapter:{
                chapter_01 : " chapter_01 : 'Introduction to HTML,CSS,JS' ",

                chapter_02 : " chapter_02 : 'HTML All Tags' ",

                chapter_03 : " chapter_03 : 'Id And Classes' ",

                chapter_04 : " chapter_04 : 'DOM Manupulation' ",

                chapter_05 : " chapter_05 : 'CSS start' ",

                chapter_06 : " chapter_06 : 'Styling to Tags By Id And Classes' ",

                chapter_07 : " chapter_07 : 'Different Css Framework (Tailwind , Bootstrap) ' ",

                chapter_08 : " chapter_08 : 'Javascript' ",

                chapter_09 : " chapter_09 : 'All Concept of JAVA Here ( Recommended To See JAVA First)' ",

                chapter_10 : " chapter_10 : 'Different Type Of JS Framework' ",
        }
    },
    {
        Id : 5,
        Name: 'NodeJS',
        Description: "Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
        Image: require('../assets/NodeJS.png'),
        chapter:{
                chapter_01 : " chapter_01 : 'Introduction To Backend' ",

                chapter_02 : " chapter_02 : 'Full JavaScript Concept (Recommended To See JS First)' ",

                chapter_03 : " chapter_03 : 'Setup Variable' ",

                chapter_04 : " chapter_04 : 'Node Globals' ",

                chapter_05 : " chapter_01 : 'Node Modules' ",

                chapter_06 : " chapter_05 : 'File System Basics' ",

                chapter_07 : " chapter_06 : 'Files And Steam' ",

                chapter_08 : " chapter_07 : 'Connnect to Html Project' ",

                chapter_09 : " chapter_08 : 'Build Backend Server' ",

                chapter_10 : " chapter_09 : 'Projects Discuss' ",


        }
    },
    {
        Id : 6,
        Name: 'ReactJs',
        Description: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
        Image: require('../assets/ReactJS.png'),
        chapter:{
                chapter_01 : " chapter_01 : 'Inroduction To Basics HTML & CSS' ",

                chapter_02 : " chapter_02 : 'Introduction to JS' ",

                chapter_03 : " chapter_03 : 'Component Working' ",

                chapter_04 : " chapter_04 : 'State Hook' ",

                chapter_05 : " chapter_05 : 'Virtual DOM' ",

                chapter_06 : " chapter_06 : 'More About React Functions' ",

                chapter_07 : " chapter_07 : 'Revision' ",

                chapter_08 : " chapter_08 : 'Project1 : Show Backend Api data in Frontend' ",

                chapter_09 : " chapter_09 : 'Project2 : CRUD APPLICATION' ",

                chapter_10 : " chapter_10 : 'Project3 : BOOK Store' ",
        }
    },
    {
        Id : 7,
        Name: 'React Native',
        Description: "React Native is a mobile app development framework that enables the development of multi-platform Android and iOS apps using native UI elements. It is based on the JavaScriptCore runtime and Babel transformers. With this setup RN supports new JavaScript (ES7+) features, e.g. arrow functions, async/await etc.",
        Image: require('../assets/ReactNative.jpg'),
        chapter:{
                chapter_01 : " chapter_01 : 'Introduction' ",

                chapter_02 : " chapter_02 : 'If/Else Condition' ",

                chapter_03 : " chapter_03 : 'Loops' ",

                chapter_04 : " chapter_04 : 'Switch Cases' ",

                chapter_05 : " chapter_01 : 'Introduction' ",

                chapter_06 : " chapter_05 : 'Array Concept' ",

                chapter_07 : " chapter_06 : 'Matrics Concepts' ",

                chapter_08 : " chapter_07 : 'String Concept' ",

                chapter_09 : " chapter_08 : 'Functions' ",

                chapter_10 : " chapter_09 : 'Pointer' ",

                chapter_11 : " chapter_10 : 'File I/O' ",

        }
    },
    
    {
        Id : 8,
        Name: 'MongoDB',
        Description: "MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.",
        Image: '../assets/Java_Programming.jpg',
        chapter:{
                chapter_01 : " chapter_01 : 'Introduction' ",

                chapter_02 : " chapter_02 : 'If/Else Condition' ",

                chapter_03 : " chapter_03 : 'Loops' ",

                chapter_04 : " chapter_04 : 'Switch Cases' ",

                chapter_05 : " chapter_01 : 'Introduction' ",

                chapter_06 : " chapter_05 : 'Array Concept' ",

                chapter_07 : " chapter_06 : 'Matrics Concepts' ",

                chapter_08 : " chapter_07 : 'String Concept' ",

                chapter_09 : " chapter_08 : 'Functions' ",

                chapter_10 : " chapter_09 : 'Pointer' ",

                chapter_11 : " chapter_10 : 'File I/O' ",

        }
    },
    
]

export default CourseApi