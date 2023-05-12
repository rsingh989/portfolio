import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    // <div className="w-full lg:h-screen p-2">
    //   <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
    //     <p className="text-xl font-bold tracking-widest uppercase text-flame-950">
    //       Skills
    //     </p>
    //     <h2 className="py-4">What I Can Do</h2>
    //     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/ui.png"
    //               alt="UI"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>UI Design</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/ux.png"
    //               alt="UX"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>UX Design</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/branding.png"
    //               alt="Branding"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>Brand Identity</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/project.png"
    //               alt="Project"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>Project Management</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/html.png"
    //               alt="HTML"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>HTML</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/css.png"
    //               alt="CSS"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>CSS</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/javascript.png"
    //               alt="Javascript"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>Javascript</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/nextjs.png"
    //               alt="NextJS"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>NextJS</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/react.png"
    //               alt="React"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>React</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/node.png"
    //               alt="NodeJS"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>NodeJS</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/tailwind.png"
    //               alt="TailwindCSS"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>TailwindCSS</h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="p-6 shadow-lg rounded-xl">
    //         <div className="grid grid-cols-2 gap-4 justify-center items-center">
    //           <div className="m-auto">
    //             <Image
    //               src="/skills/shopify.png"
    //               alt="Shopify"
    //               width="64"
    //               height="64"
    //             />
    //           </div>
    //           <div className="flex flex-col items-center justify-center">
    //             <h3>Shopify</h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full py-8 px-8 sm:py-16 sm:px-8 lg:p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center h-full lg:items-start">
        <p className="text-xl font-bold tracking-widest uppercase text-flame-950">
          Skills
        </p>
        <h2 className="pt-4 pb-8">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/ui.png"
                    alt="UI"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>UI Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/ux.png"
                    alt="UX"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>UX Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/branding.png"
                    alt="Branding"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Brand Identity</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/project.png"
                    alt="Project"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Project Management</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/html.png"
                    alt="HTML"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/css.png"
                    alt="CSS"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/javascript.png"
                    alt="JavaScript"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/nextjs.png"
                    alt="NextJS"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NextJS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/react.png"
                    alt="React"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/node.png"
                    alt="NodeJS"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>NodeJS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/tailwind.png"
                    alt="Tailwind"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>TailwindCSS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 bg-flame-950 rounded-xl shadow-lg shadow-richBlack-300 hover:scale-110 ease-in duration-300">
            <div className="p-6 shadow-lg rounded-lg bg-ghostWhite">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src="/skills/shopify.png"
                    alt="Shopify"
                    width="64"
                    height="64"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Shopify</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
