import React from "react";

function SkillsComp() {
  return (
    <div   className=" mb-4  text-center bg-black ">
      <h2 className=" text-2xl flex justify-center items-center mt-3 text-yellow-600">Skills Summary</h2>
      <h3 className="title">How I do my work</h3>
      <hr className="border-t-2 border-gray-400" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <h4 className="text-yellow-500">Backend</h4>
          <h5 className="text-yellow-500 font-bold">Languages</h5>
          <ul className="list-disc list-inside text-yellow-500">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>NodeJS</li>
          </ul>
          <h5 className="text-yellow-500 font-bold">Databases</h5>
          <ul className="list-disc list-inside text-yellow-500">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
          <h5 className="text-yellow-500 font-bold">API</h5>
          <ul className="list-disc list-inside text-yellow-500">
            <li>REST</li>
            <li>OAuth</li>
            <li>Google</li>
          </ul>
          <h5 className="text-yellow-500 font-bold">Tools | Frameworks</h5>
          <ul className="list-disc list-inside text-yellow-500">
            <li>ExpressJS</li>
            <li>GIT | SVN</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="p-4">
          <h4 className="text-yellow-500">Frontend</h4>
          <ul className="list-disc list-inside text-yellow-500">
            <li>HTML5</li>
            <li>CSS3 & Responsive</li>
            <li>Javascript</li>
            <li>ES5 | ES6</li>         
            <li>Babel | ESLint</li>
            <li>React | React Router</li>
            <li>Next.js</li>
            <li>Bootstrap</li>
            <li>Axios</li>
            <li>React Query</li>
            <li>Tailwind CSS</li>
            <li>Font Awesome | Google fonts</li>
            <li>Gulp | Webpack</li>
          </ul>
        </div>
        <div className="p-4">
          <h4 className="text-yellow-500">Others</h4>
          <ul className="list-disc list-inside text-yellow-500">
            <li>Git</li>
            <li>Github</li>
            <li>Google Cloud Bucket Admin</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsComp;
