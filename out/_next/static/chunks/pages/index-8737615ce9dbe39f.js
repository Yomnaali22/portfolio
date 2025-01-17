(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(8099)}])},7130:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>o});var a=l(4848),s=l(1106),r=l.n(s),i=l(5692);let n=[{image:"/images/opleglandingpage.webp",id:"1",description:"Opleg Landing Page",link:"https://sc-149-manage-see-expenses.opleg.pages.dev/"},{image:"/images/ecommerce.webp",id:"3",description:"Ecommerce",link:"https://opleg.com/"},{image:"/images/landingpage.webp",id:"2",description:"Landing Page",link:"https://opleg.com/"},{image:"/images/movieswebsite.webp",id:"4",description:"Movies Website",link:"https://opleg.com/"}],o=()=>(0,a.jsx)(i.pL,{threshold:0,children:e=>{let{inView:t,ref:l,entry:s}=e;return(0,a.jsxs)("div",{ref:l,className:t?"projects grid grid-rows-1 gap-8 md:gap-20 w-full animate-move-up":"grid grid-rows-1 gap-8 md:gap-20 w-full","aria-label":"projects-title",children:[(0,a.jsx)("h6",{id:"projects",className:"font-firacodebold text-4xl md:text-6xl lg:text-8xl text-headlinesFontColor text-center md:text-left",children:"PROJECTS"}),(0,a.jsx)("section",{className:"project-section gap-8 md:gap-20 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 justify-center items-center pb-20","aria-label":"Projects",children:n.map(e=>(0,a.jsxs)(r(),{"aria-label":e.description,href:e.link,target:"_blank",className:"col-span-1 h-full w-full md:w-[90%] transition-transform duration-900 ease-in-out transform projectCardBorderRadius cursor-pointer flex flex-row flex-wrap justify-center",children:[(0,a.jsx)("img",{src:e.image,alt:e.description,className:"w-full h-full object-cover rounded-3xl aspect-video"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-backgroundTransitionColor bg-opacity-30 hover:opacity-0 opacity-100 transition-opacity duration-300 rounded-3xl",children:(0,a.jsx)("img",{alt:"open project in new tab icon",src:"/images/opentab.webp",className:"opacity-50 w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"})})]},e.id))})]})}})},8099:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>w});var a=l(4848),s=l(1106),r=l.n(s),i=l(4953),n=l.n(i),o=l(6540);let c=(0,o.createContext)({toggle:()=>{},theme:!1}),d=e=>{let{children:t}=e,[l,s]=(0,o.useState)(()=>{{let e=localStorage.getItem("theme");return!!e&&JSON.parse(e)}});return(0,o.useEffect)(()=>{var e,t,a;localStorage.setItem("theme",JSON.stringify(l)),null===(e=document.querySelector("html"))||void 0===e||e.classList.remove("dark-theme","light-theme"),l?null===(a=document.querySelector("html"))||void 0===a||a.classList.add("light-theme"):null===(t=document.querySelector("html"))||void 0===t||t.classList.add("dark-theme")},[l]),(0,a.jsx)(c.Provider,{value:{toggle:()=>{s(!l),localStorage.setItem("theme",JSON.stringify(!l))},theme:l},children:t})},x=n()(()=>l.e(606).then(l.bind(l,4606)),{loadableGenerated:{webpack:()=>[4606]},ssr:!1}),m=e=>{let{isMobile:t}=e,l="".concat(t?"w-full p-2 rounded-md hove r:bg-headlinesFontColor/10":"hover:underline underline-offset-[28px]"," decoration-[0.1px] hover:text-hoverColor transition duration-300 ease-in-out");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{href:"#experience",className:l,"aria-label":"My Experience",children:"Experience"}),(0,a.jsx)(r(),{href:"#projects",className:l,"aria-label":"My Projects",children:"Projects"}),(0,a.jsx)(r(),{href:"#contact",className:l,"aria-label":"Contact Me",children:"Contact Me"})]})};function h(){let{toggle:e,theme:t}=(0,o.useContext)(c),l=()=>(0,a.jsx)("button",{onClick:e,"aria-label":"Toggle Theme button",children:(0,a.jsx)("img",{src:t?"images/dark.webp":"images/light.webp",alt:"Toggle Theme Icon",className:"lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-6 xs:h-6"})});return(0,a.jsxs)("header",{style:{background:"var(--background)"},className:"bg-background fixed z-50 flex justify-between items-center pt-6 pl-6 pr-6 pb-5 w-full border-b-[0.1px] border-b-headlinesFontColor",role:"banner",children:[(0,a.jsx)(r(),{href:"https://github.com/Yomnaali22?tab=overview&from=2024-10-01&to=2024-10-31",target:"_blank",rel:"noopener noreferrer","aria-label":"My Github Profile",title:"My Github Profile",children:(0,a.jsx)("img",{src:t?"images/githubWhiteMode.webp":"images/github.webp",alt:"My Github Profile Icon",className:"lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-6 xs:h-6"})}),(0,a.jsxs)(x,{query:"(min-width: 800px)",children:[(0,a.jsx)("nav",{className:"w-full xs:text-extraSmall sm:text-sm md:text-lg lg:text-xl flex justify-center items-center text-sectionFontColor md:flex md:gap-20 lg:gap-20 xs:gap-3 sm:gap-10 font-firacoderegular","aria-label":"Main Navigation",children:(0,a.jsx)(m,{})}),(0,a.jsx)(l,{})]}),(0,a.jsx)(x,{query:"(max-width: 800px)",children:(0,a.jsx)(e=>{let{isMobile:t}=e,[s,r]=(0,o.useState)(!1);return(0,a.jsxs)("div",{className:"flex gap-5",children:[(0,a.jsx)("button",{onClick:()=>{r(!s)},"aria-label":"Open Menu Button",className:"cursor-pointer",children:(0,a.jsx)("svg",{x:"0px",y:"0px",width:"70",height:"70",viewBox:"0 0 50 50",stroke:"text-sectionFontColor",className:"size-6 text-sectionFontColor",children:(0,a.jsx)("path",{className:"stroke-current",d:"M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"})})}),s&&(0,a.jsx)("ul",{className:"mobile-menu w-40 min-h-[8rem] text-sectionFontColor absolute mt-2 rounded-md shadow-lg z-10 flex flex-col gap-2 transform -translate-x-[3rem] -translate-y-[-1rem] border border-headlinesFontColor/20 p-3 backdrop-blur-sm transition-all duration-300 ease-in-out",children:(0,a.jsx)(m,{isMobile:t})}),(0,a.jsx)(l,{})]})},{isMobile:!0})})]})}let p=e=>{let{dir:t}=e;return(0,a.jsx)("button",{"aria-label":"Scroll down",onClick:()=>{window.scrollTo({top:"top"===t?0:window.innerHeight,behavior:"smooth"}),window.history.pushState({},"","/")},className:"border border-[0.1px] border-headlinesSectionColor scrollButton absolute left-[50%] transform -translate-x-1/2 animate-float xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full scrollButton bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300",children:(0,a.jsx)("svg",{className:"text-headlinesFontColor xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",children:(0,a.jsx)("path",{d:"bottom"===t?"M12 16L6 10L7.4 8.6L12 13.2L16.6 8.6L18 10L12 16Z":"M12 8L6 14L7.4 15.4L12 10.8L16.6 15.4L18 14L12 8Z",fill:"currentColor"})})})},g=()=>(0,a.jsxs)("div",{id:"contact",className:"names mt-16 pb-10 gap-3 flex flex-row items-center justify-center text-white bg-[--background] w-full animate-move-up ease-in-out",children:[(0,a.jsx)("h6",{className:"font-firacodebold text-headlinesFontColor",children:"Contact Me "}),(0,a.jsx)(r(),{href:"mailto:yomna.ib.ali@gmail.com",className:"h-[38px] w-[38px]",target:"_blank",children:(0,a.jsx)("img",{src:"/images/gmail_icon.webp",alt:"Gmail",className:"h-[38px] w-[38px]"})}),(0,a.jsx)(r(),{href:"https://www.linkedin.com/in/yomna-ali-59995a190/",target:"_blank",className:"h-[35px] w-[35px]",children:(0,a.jsx)("img",{src:"images/linkedin_icon.webp",alt:"LinkedIn",className:"h-[35px] w-[35px]"})}),(0,a.jsx)("div",{className:"absolute bottom-[100px] right-28",children:(0,a.jsx)(p,{dir:"top"})})]}),u=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{"aria-label":"Intro",className:"flex xs:flex-col-reverse flex-row xs:justify-start xs:items-start justify-between items-center marginTop text-sectionFontColor",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,a.jsx)("h1",{"aria-label":"Greeting",className:"font-firacoderegular lg:text-3xl md:text-3xl mb-10 animate-move-up ease-in-out",children:"Hello, Yomna here,"}),(0,a.jsxs)("h2",{"aria-label":"Full-stack Developer",className:"font-firacoderegular lg:text-3xl md:text-2xl mb-10 animate-move-up ease-in-out",children:[(0,a.jsxs)("span",{className:"font-firacodesemibold text-headlinesFontColor",children:["Full-stack Developer"," "]}),"specializing in"]}),(0,a.jsx)("h3",{"aria-label":"Specialization in frontend development",className:"font-firacodebold lg:text-8xl md:text-3xl mb-5px animate-move-up delay-200 ease-in-out text-headlinesFontColor",children:"FRONTEND DEVELOPMENT"}),(0,a.jsx)("h4",{"aria-label":"Description",className:"font-firacoderegular lg:text-2xl md:text-2xl mb-10 animate-move-up delay-300 ease-in-out wrap",children:"Driven by design and the power of AI to craft meaningful, user-centered experiences."}),(0,a.jsx)(r(),{href:"/files/Resume.pdf",target:"_blank",rel:"noopener noreferrer","aria-label":"Resume button",className:"animate-move-up ease-in-out bg-hoverBackground ml-2 p-4 transition duration-300 ease border-[0.5px] border-[--hover-color] rounded-[5px] w-[25%] h-[50%] text-center text-headlinesFontColor",children:(0,a.jsx)("p",{className:"lg:text-xl md:text-md sm:text-sm xs:text-xs relative z-20 bottom-0 text-headlinesFontColor font-firacodesemibold",children:"Resume"})})]}),(0,a.jsx)("img",{src:"/images/avatarGroup.webp",alt:"Yomna Ali, a front-end developer",className:"object-contain w-[42%] h-full",onError:e=>{e.currentTarget.src="/images/avatarGroup.webp"}})]}),(0,a.jsx)(p,{dir:"bottom"})]})});var f=l(5692);let b=()=>(0,a.jsxs)("div",{id:"experience",className:"animate-move-up flex flex-col gap-14 items-left justify-center",children:[(0,a.jsx)(f.pL,{threshold:0,children:e=>{let{inView:t,ref:l,entry:s}=e;return(0,a.jsxs)("div",{ref:l,className:"".concat(t?"animate-move-up flex flex-col gap-14 items-left justify-center":"flex flex-col gap-14 items-left justify-center"),children:[(0,a.jsx)("h5",{className:"font-firacodebold text-2xl md:text-8xl text-headlinesFontColor",children:"EXPERIENCE"}),(0,a.jsx)("p",{className:"pb-5 font-firacoderegular wd:md lg:text-2xl md:text-1xl text-sectionFontColor whitespace-wrap",children:"Frontend Developer specializing in ReactJs with experience in designing and implementing user-friendly, responsive interfaces. Skilled in JavaScript, HTML, CSS, and modern front- end tools to create efficient, maintainable code."})]})}}),(0,a.jsx)(f.pL,{threshold:0,children:e=>{let{inView:t,ref:l,entry:s}=e;return(0,a.jsxs)("ul",{className:"font-firacodesemibold flex gap-12 flex-col list-disc wd:md text-xl md:text-1xl text-sectionFontColor responsive-padding",children:[(0,a.jsxs)("li",{ref:l,className:"".concat(t?"animate-move-left ease-in-out lg:text-2xl md:text-base sm:text-sm xs:text-xs":"lg:text-2xl md:text-base sm:text-sm xs:text-xs lg:text-2xl"),children:["Full-Stack Scalable Legal Accounting Management Platform",(0,a.jsx)("p",{className:"font-firacoderegular pt-2 lg:text-xl md:text-base sm:text-sm xs:text-xs text-sectionFontColor",children:"Increase client satisfaction and reporting clarity"})]}),(0,a.jsxs)("li",{ref:l,className:"".concat(t?"animate-move-left ease-in-out lg:text-2xl md:text-base sm:text-sm xs:text-xs":"lg:text-2xl md:text-base sm:text-sm xs:text-xs lg:text-2xl"),children:["Dynamic Landing Page Implementation with Next.Js SSG",(0,a.jsx)("p",{className:"font-firacoderegular pt-2 lg:text-xl md:text-base sm:text-sm xs:text-xs text-sectionFontColor",children:"Increased user interaction by 20%"})]})]})}})]});l(7130);let j=n()(()=>Promise.resolve().then(l.bind(l,7130)),{loadableGenerated:{webpack:()=>[7130]}});function w(){return(0,a.jsxs)(d,{children:[(0,a.jsx)(h,{}),(0,a.jsxs)("div",{className:"pt-20 h-full flex flex-col pageSpacing responsive-padding",children:[(0,a.jsx)(u,{}),(0,a.jsx)(b,{}),(0,a.jsx)(j,{})]}),(0,a.jsx)(g,{})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[965,636,593,792],()=>t(2022)),_N_E=e.O()}]);