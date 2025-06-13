import React from 'react';

export default function HomePanel() {
    return (
        <div id="Home" className="flex justify-center items-center h-dvh snap-start">
        <div className="space-y-16 max-w-md w-full">
          <div className="flex justify-between h-12">
            <div className="border-l-4 border-t-4 w-12"></div>
            <div className="border-r-4 border-t-4 w-12"></div>
          </div>
          <div className="flex flex-col justify-center items-right mx-12 text-lg">
            <p className="pb-4">Oh Hey There...</p>
            <p>Jack here. I&#39;m a</p>
            <p>aspiring Software&nbsp;Engineer,</p>
            <p>part-time outdoor enthusiast,</p>
            <p>full-time student,</p>
            <p>and lifetime tinkerer.</p>
          </div>
          <div className="flex justify-between gap-56 h-12">
            <div className="border-l-4 border-b-4 w-12"></div>
            <div className="border-r-4 border-b-4 w-12"></div>
          </div>
        </div>
      </div>
    );
}