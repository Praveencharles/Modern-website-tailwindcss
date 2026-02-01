import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeExamples } from "../data/CodeExamples";

const features = [
  {
    title: "Advance styling method",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam saepe, amet quod rerum ",
    codeSnippet: `
    function handleSubmit() {
    //AI suggests next line
    const data = await fetch("/api/submit")
    //Auto-complete by AI
    }
    `,
    imagePosition: "left",
  },
  {
    title: "Pre-defined components",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam saepe, amet quod rerum ",
    codeSnippet: `
    function handleSubmit() {
    //AI suggests next line
    const data = await fetch("/api/submit")
    //Auto-complete by AI
    }
    `,
    imagePosition: "right",
  },
  {
    title: "Last stage of designs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam saepe, amet quod rerum ",
    codeSnippet: `
    function handleSubmit() {
    //AI suggests next line
    const data = await fetch("/api/submit")
    //Auto-complete by AI
    }
    `,
    imagePosition: "left",
  },
];

const Features = () => {
  return (
    <section
      id="featuress"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 ms:mb-16 lg:mb-20 ">
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-900 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32 ">
          {features.map((features, key) => {
            return (
              <div
                key={key}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${features.imagePosition === "right" ? "lg:flex-row-reverse " : ""}`}
              >
                <div className="flex-1 w-full ">
                  <div className="relative group">
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 group-hover:border-blue-600/50 transition-all duration-300">
                      {/*Ide interface*/}
                      <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                        <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4 ">
                          <div className="flex space-x-1 sm:space-x-2 items-center">
                            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                            {features.title}
                          </span>
                        </div>
                        <div>
                          <SyntaxHighlighter
                            language="javascript"
                            style={nightOwl}
                            customStyle={{
                              background: "transparent",
                              margin: 0,
                              borderRadius: "8px",
                              fontSize: "0.75rem",
                              lineHight: "1.4",
                              overflow: "hidden",
                              height: "100%",
                              border: "1px solid #c3c3c3",
                            }}
                          >
                            {features.codeSnippet}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*text section */}
                <div className="flex-1 w-full">
                  <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                    <h3 className="text-4xl sm:text-3xl lg:text-4xl mb-4 font-bold sm:mb-6 text-white">
                      {features.title}
                    </h3>
                    <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                      {features.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
