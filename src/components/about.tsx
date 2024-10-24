import Image from "next/image"

interface Sec {
  title: string,
  content: string,
}

const About = () => {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-primary py-8">
            About Me
          </h1>
          <div className="flex justify-center">
            <Image
              src="/picture.jpg"
              alt="picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <p className="text-base sm:text-xl text-center font-semibold text-gray-600 mt-6 mx-4 sm:mx-12 lg:mx-40">
            Hello, I’m Muhammad Adnan, a passionate Front-end Developer committed
            to building intuitive, engaging, and high-performance web experiences. 
            Here’s a deeper look into who I am and what drives my work:
          </p>
  
          <div className="text-gray-600 mt-8 space-y-6">
            {/** Expertise Section */}
            <Section 
              title="Professional Expertise"
              content="I specialize in web development using HTML, CSS, JavaScript & TypeScript and modern frameworks like Next.js. My focus is on creating sleek, responsive interfaces that deliver a smooth user experience across all devices."
            />
            
            {/** Design Section */}
            <Section 
              title="Design Meets Development"
              content="I have a deep appreciation for both design and functionality. I enjoy the process of turning creative ideas into fully-functional products, ensuring they are not only visually appealing but also easy to navigate for users."
            />
  
            {/** Performance Section */}
            <Section 
              title="Performance Optimization"
              content="I believe that speed is critical to good user experience. That’s why I focus on optimizing load times and interactions, ensuring that my projects run efficiently and smoothly, no matter the complexity."
            />
  
            {/** Lifelong Learner Section */}
            <Section 
              title="Lifelong Learner"
              content="Technology evolves rapidly, and I enjoy keeping up with the latest tools, frameworks, and industry trends. Continuous learning is a core part of my approach, helping me improve my skills and bring innovative solutions to the table."
            />
  
            {/** Teamwork Section */}
            <Section 
              title="Team Player and Collaborator"
              content="My experience working closely with designers, developers, and project stakeholders has taught me the value of communication and teamwork. I thrive in collaborative environments and enjoy contributing to group success."
            />
          </div>
        </div>
      </main>
    );
  }
 
  function Section({ title, content }:Sec) {
    return (
      <div className="p-4 border-2 rounded-lg text-lg">
        <b>{title}</b>
        <p className="mt-2">{content}</p>
      </div>
    );
  }

export default About