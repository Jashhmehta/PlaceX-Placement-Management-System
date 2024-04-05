import React, { useState, useEffect } from "react";
import "../Home-CSS/Faq.css";
import Navbar from "../HomeComponents/Navbar.js";
import Footer from "../HomeComponents/Footer.js";
function FaqPage() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const items = document.querySelectorAll(".accordion-item");

    const handleClick = function () {
      if (!this.classList.contains("active")) {
        closeAllAccordions();
        this.classList.add("active");
      }
    };

    items.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    // Open the first accordion item on load
    items[0].classList.add("active");

    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  function closeAllAccordions() {
    const items = document.querySelectorAll(".accordion-item");
    items.forEach((item) => {
      item.classList.remove("active");
    });
  }
  const leetCodeQuestions = [
    {
        question: "Two Sum",
        answer: "You can use a hash table to store the difference between the target and each element in the array. Iterate through the array once and check if the difference exists in the hash table."
    },
    {
        question: "Reverse Integer",
        answer: "You can use modulo and division to extract each digit of the integer and construct the reversed integer. Be careful of integer overflow."
    },
    {
        question: "Palindrome Number",
        answer: "Convert the integer to a string and check if the string is equal to its reverse. Alternatively, reverse the integer and compare it with the original."
    },
    {
        question: "Valid Parentheses",
        answer: "Use a stack to keep track of the opening brackets. When encountering a closing bracket, check if it matches the top of the stack."
    },
    {
        question: "Merge Two Sorted Lists",
        answer: "Iterate through both lists simultaneously, comparing elements and merging them into a new sorted list."
    },
    {
        question: "Maximum Subarray",
        answer: "Use Kadane's algorithm to find the maximum sum subarray in an array."
    },
    {
        question: "Single Number",
        answer: "Use XOR operation to cancel out duplicate numbers, leaving only the single number."
    },
    {
        question: "Linked List Cycle",
        answer: "Use two pointers, one moving at double speed, to detect a cycle in a linked list."
    },
    {
        question: "Reverse Linked List",
        answer: "Iteratively reverse the pointers of each node in the linked list."
    },
    {
        question: "Container With Most Water",
        answer: "Use two pointers, starting from the edges of the array, and move the pointer with the shorter height until they meet."
    },
    {
        question: "Longest Substring Without Repeating Characters",
        answer: "Use a sliding window approach to find the longest substring without repeating characters."
    },
    {
        question: "Roman to Integer",
        answer: "Create a map of Roman numeral values and iterate through the string, adding or subtracting values based on the current and next characters."
    },
    {
        question: "Valid Sudoku",
        answer: "Check each row, column, and 3x3 subgrid to ensure that it contains unique digits from 1 to 9."
    },
    {
        question: "Search in Rotated Sorted Array",
        answer: "Use binary search to find the pivot point where the array is rotated, then perform binary search in the appropriate half."
    },
    {
        question: "3Sum",
        answer: "Sort the array and use two pointers to find all unique triplets that sum up to zero."
    }
];


  const behavioralInterviewQuestions = [
    {
      question: "Can you tell me about yourself?",
      answer:
        "This is typically the first question in many interviews. Provide a brief summary of your professional background, skills, and experiences relevant to the job.",
    },
    {
      question: "What are your greatest strengths?",
      answer:
        "Highlight your key strengths that are relevant to the job and provide examples of how you've demonstrated them in previous roles.",
    },
    {
      question:
        "Can you describe a situation where you had to overcome a challenge or obstacle at work?",
      answer:
        "Discuss a specific challenge you faced, the actions you took to address it, and the outcome. Focus on problem-solving skills and resilience.",
    },
    {
      question:
        "How do you handle conflicts or disagreements with colleagues or team members?",
      answer:
        "Explain your approach to resolving conflicts, such as active listening, communication, and finding common ground to reach a solution.",
    },
    {
      question:
        "Can you provide an example of a time when you demonstrated leadership skills?",
      answer:
        "Describe a situation where you took initiative, motivated others, or led a project to success. Highlight your ability to inspire and guide a team.",
    },
    {
      question: "How do you prioritize tasks and manage your time effectively?",
      answer:
        "Discuss your organizational skills, methods for setting priorities, and time-management techniques to ensure productivity and meet deadlines.",
    },
    {
      question:
        "Can you discuss a successful project you worked on and your role in it?",
      answer:
        "Talk about a project where you made significant contributions, your responsibilities, and how your efforts contributed to achieving the project's goals.",
    },
    {
      question: "How do you handle failure or setbacks?",
      answer:
        "Demonstrate your ability to learn from failures, adapt to changes, and maintain a positive attitude. Discuss how setbacks have motivated you to improve.",
    },
    {
      question:
        "Can you describe a situation where you had to work under pressure and how you managed it?",
      answer:
        "Provide an example of a high-pressure situation you faced, how you stayed calm and focused, and the steps you took to meet the challenge successfully.",
    },
    {
      question: "How do you handle feedback, both positive and negative?",
      answer:
        "Explain how you welcome feedback as an opportunity for growth, appreciate positive feedback, and use constructive criticism to improve your performance.",
    },
  ];

  const aptitudeQuestions = [
    {
      question:
        "If a car travels at a speed of 60 miles per hour, how many miles will it travel in 3 hours?",
      answer:
        "To find the total distance traveled, we multiply the speed by the time:60 miles/hour × 3hours =180 miles 60 miles/hour×3 hours=180 miles.",
    },
    {
      question:
        "A store offers a 20% discount on all items. If the original price of a shirt is $25, what is the discounted price?",
      answer:
        "The discount amount is 20%20% of $25, which is 0.20 / times 25 = $5. So, the discounted price is $25 - $5 = $20.",
    },
  ];

  const technicalQuestions = [
    {
      question:
        "What is the difference between an abstract class and an interface in Java?",
      answer:
        "An abstract class in Java can have both abstract and concrete methods. It can also have instance variables. Interfaces, on the other hand, can only have abstract methods (prior to Java 8). An interface cannot contain instance variables, and all its methods are implicitly public and abstract. Additionally, a class can implement multiple interfaces but can only extend one abstract class. Abstract classes are used to provide a common base implementation for subclasses, while interfaces are used to define contracts that classes must adhere to.",
    },
    {
      question:
        "Explain the concept of polymorphism in object-oriented programming.",
      answer:
        "Polymorphism is a fundamental concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. There are two main types of polymorphism: compile-time polymorphism and runtime polymorphism. Compile-time polymorphism, also known as method overloading, allows multiple methods with the same name but different parameters to coexist in a class. Runtime polymorphism, also known as method overriding, occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. Polymorphism promotes code reusability, flexibility, and extensibility in object-oriented systems.",
    },
    {
      question:
        "What is the difference between a stack and a queue data structure?",
      answer:
        "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, meaning that the last element added to the stack is the first one to be removed. It supports two main operations: push (adds an element to the top of the stack) and pop (removes the top element from the stack). On the other hand, a queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning that the first element added to the queue is the first one to be removed. It supports two main operations: enqueue (adds an element to the rear of the queue) and dequeue (removes the front element from the queue). Stacks are used in scenarios such as function call management, expression evaluation, and undo operations, while queues are used in scenarios such as job scheduling, breadth-first search, and resource allocation.",
    },
    {
      question: "What are design patterns in software engineering?",
      answer:
        "Design patterns are reusable solutions to common problems encountered during software development. They represent best practices and proven solutions that can be applied to various design and implementation challenges. Design patterns provide a common language for developers to communicate and share solutions, promote code maintainability and scalability, and help in creating flexible and modular software architectures. Some popular design patterns include Singleton, Factory, Adapter, Observer, Strategy, and Composite patterns.",
    },
    {
      question:
        "Explain the concept of Big O notation and its significance in algorithm analysis.",
      answer:
        "Big O notation is a mathematical notation used to describe the performance or complexity of an algorithm in terms of the input size. It provides an upper bound on the worst-case time or space complexity of an algorithm as the input size approaches infinity. Big O notation allows developers to analyze and compare the efficiency of algorithms without having to consider implementation details or hardware differences. It helps in identifying algorithms that scale well with increasing input sizes and allows for making informed decisions regarding algorithm selection and optimization. Common Big O complexities include O(1) (constant time), O(log n) (logarithmic time), O(n) (linear time), O(n log n) (linearithmic time), O(n^2) (quadratic time), and O(2^n) (exponential time).",
    },
    {
      question: "What is the role of a virtual function in C++?",
      answer:
        "A virtual function in C++ is a member function that is declared as virtual in a base class and can be overridden in derived classes. When a virtual function is invoked using a pointer or reference to a base class object, the actual implementation of the function is determined at runtime based on the type of the object being pointed to or referenced. This enables polymorphic behavior, allowing objects of different derived classes to be treated uniformly through a common base class interface. Virtual functions are used to achieve runtime polymorphism in C++ and facilitate dynamic method dispatch.",
    },
    {
      question: "What is the purpose of garbage collection in Java?",
      answer:
        "Garbage collection in Java is a mechanism for automatically reclaiming memory occupied by objects that are no longer in use or reachable by the application. It helps in preventing memory leaks and managing memory efficiently by reclaiming resources allocated to objects that are no longer needed. The garbage collector periodically scans the heap memory, identifies unreferenced objects, and deallocates their memory space, making it available for reuse",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="main" style={{ marginTop: "150px" }}>
        <div className="header">
          <h1 className="faq-heading">Frequently Asked Questions</h1>
        </div>
        <div className="tabs-container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Coding Interview Questions
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Behavioral Interview Questions
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Technical Interview Questions
            </button>
          </div>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <div className="accordion">
              {technicalQuestions.map((q, index) => (
                <div
                  className="accordion-item"
                  key={index}
                  style={{
                    width: "100%",
                    maxWidth: "800px", // Increase the maximum width of the accordion item
                    transition: "width 0.3s ease",
                    margin: "20px auto",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleAccordion(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="accordion-title"
                    style={{
                      backgroundColor:
                        hoveredIndex === index ? "#f0f0f0" : "transparent",
                      padding: "10px",
                      transition: "background-color 0.8s ease",
                      color: "#000",
                    }}
                  >
                    Question {index + 1}: {q.question}
                  </div>
                  <div
                    className="accordion-content"
                    style={{
                      display: openIndex === index ? "block" : "none",
                      padding: "10px",
                    }}
                  >
                    <p>{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <div className="accordion">
              {leetCodeQuestions.map((q, index) => (
                <div
                  className="accordion-item"
                  key={index}
                  style={{
                    width: "100%",
                    maxWidth: "800px", // Increase the maximum width of the accordion item
                    transition: "width 0.3s ease",
                    margin: "20px auto",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleAccordion(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="accordion-title"
                    style={{
                      backgroundColor:
                        hoveredIndex === index ? "#f0f0f0" : "transparent",
                      padding: "10px",
                      transition: "background-color 0.8s ease",
                      color: "#000",
                    }}
                  >
                    Question {index + 1}: {q.question}
                  </div>
                  <div
                    className="accordion-content"
                    style={{
                      display: openIndex === index ? "block" : "none",
                      padding: "10px",
                    }}
                  >
                    <p>{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <div className="accordion">
              {behavioralInterviewQuestions.map((q, index) => (
                <div
                  className="accordion-item"
                  key={index}
                  style={{
                    width: "100%",
                    maxWidth: "800px", // Increase the maximum width of the accordion item
                    transition: "width 0.3s ease",
                    margin: "20px auto",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleAccordion(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="accordion-title"
                    style={{
                      backgroundColor:
                        hoveredIndex === index ? "#f0f0f0" : "transparent",
                      padding: "10px",
                      transition: "background-color 0.8s ease",
                      color: "#000",
                    }}
                  >
                    Question {index + 1}: {q.question}
                  </div>
                  <div
                    className="accordion-content"
                    style={{
                      display: openIndex === index ? "block" : "none",
                      padding: "10px",
                    }}
                  >
                    <p>{q.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FaqPage;
