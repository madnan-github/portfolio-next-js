import Link from "next/link";

const Home = () => {

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-primary to-accent flex items-center justify-center">
//             <div className="text-center">
//                 <h1 className="text-5xl font-bold text-white my-20">
//                     Hi, I&#39;m <span className="text-accent">Muhammad Adnan</span>
//                 </h1>
//                 <p className="m-10 text-xl text-gray-200">
//                     A passionate Frontend Developer.
//                 </p>
//                 <p className="mx-[200px] my-8 text-xl text-gray-200">
//                 As a Front-end Developer who bridges the gap between creativity and code. With every project, I aim to create immersive digital experiences that are not just functional but delightful. From sleek, responsive layouts to optimized performance, I believe in crafting web solutions that leave a lasting impression. Dive into my work, explore my journey, and let&#39;s turn innovative ideas into reality!
//                 </p>
//                 <div className="flex justify-center "> 
//                 <Link href="/projects">
//                     <button className="w-40 mx-10 mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-gray-200 transition">
//                         View My Work
//                     </button>
//                 </Link>
//                 <Link href="/projects">
//                     <button className="w-40 mx-10 mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-gray-200 transition">
//                         Hire Me!
//                     </button>
//                 </Link>
//                 </div>
//             </div>

//         </div>
//     );
// }
    return (
      <div className="min-h-screen bg-gradient-to-r from-primary to-accent flex items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white my-10 sm:my-20">
            Hi, I&#39;m <span className="text-accent">Muhammad Adnan</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            A passionate Frontend Developer.
          </p>
          <p className="mx-auto text-lg sm:text-xl text-gray-200 my-8 px-4 sm:px-8 lg:px-20">
            As a Front-end Developer who bridges the gap between creativity and code. With every project, I aim to create immersive digital experiences that are not just functional but delightful. From sleek, responsive layouts to optimized performance, I believe in crafting web solutions that leave a lasting impression. Dive into my work, explore my journey, and let&#39;s turn innovative ideas into reality!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link href="/projects">
              <button className="w-full sm:w-40 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-gray-200 transition">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-40 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-accent hover:text-gray-200 transition">
                Hire Me!
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
export default Home