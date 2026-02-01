import { ArrowRight, ChevronDown, Play, Sparkle, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeExamples } from "../data/CodeExamples";

const Hero = () => {
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(e) {
      setMouseMove({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 "
        style={{
          background: `radial-gradient(600px circle at ${mouseMove.x}px ${mouseMove.y}px, rgba(59,130,246,0.15, transparent 40%))`,
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto text-center flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-300">
                Introducing New Project
              </span>
            </div>
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-200 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text block mb-1 sm:mb-2 text-transparent">
                Project
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text block mb-1 sm:mb-2 text-transparent text-5xl sm:text-6xl ">
                Tailwind Css
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text block mb-1 sm:mb-2 text-transparent ">
                Charles .Dev
              </span>
            </h1>
            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-300 delay-400 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              eaque error neque dolorem voluptatum consequatur molestias beatae
              laborum commodi
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-600">
              <button className="group w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 ">
                <span>Start Coding Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-white/5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 border border-white/20 hover:bg-white/10 flex items-center justify-center space-x-2 ">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Github</span>
              </button>
            </div>
          </div>

          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ">
              <div className="bg-gradient-to-br w-full from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] lg:h-[450px] border border-white/5">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 py:-3 bg-white/5 backdrop-blur-5m border-b border-white/10 ">
                  <div className="flex space-x-2 items-center">
                    <div className="flex space-x-1 sm:space-x-2 items-center">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 ">
                      Charles.Dev
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                </div>
                <div className="p-3 sm:p-4 relative h-full">
                  <div className="flex space-x-1 mb-3 sm:mb-4">
                    <button
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  text-gray-300 transition-all duration-200 whitespace-nowrap`}
                      onClick={() => setActiveTab("App.jsx")}
                    >
                      App.jsx
                    </button>
                    <button
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  text-gray-300 transition-all duration-200 whitespace-nowrap`}
                      onClick={() => setActiveTab("Hero.jsx")}
                    >
                      Hero.jsx
                    </button>
                    <button
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  text-gray-300 transition-all duration-200 whitespace-nowrap`}
                      onClick={() => setActiveTab("Navbar.jsx")}
                    >
                      Navbar.jsx
                    </button>
                  </div>

                  <div className="relative overflow-hidden flew-grow ">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHight: "1.4",
                        height: "100%",
                        border: "1px solid #c3c3c3",
                      }}
                    >
                      {codeExamples[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
