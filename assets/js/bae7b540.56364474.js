"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[610],{9846:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var l=a(5893),t=a(1151);const i={sidebar_position:1,id:"newtype",title:"Newtype"},r=void 0,s={id:"core/newtype/newtype",title:"Newtype",description:"Import",source:"@site/../generated-docs/docs/core/newtype/newtype.md",sourceDirName:"core/newtype",slug:"/core/newtype/",permalink:"/docs/core/newtype/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"newtype",title:"Newtype"},sidebar:"docsSidebar",previous:{title:"core module",permalink:"/docs/core/"},next:{title:"Refined",permalink:"/docs/core/refined/"}},c={},o=[{value:"<code>Import</code>",id:"import",level:2},{value:"Define Newtype",id:"define-newtype",level:2},{value:"Create Value",id:"create-value",level:2},{value:"Get Actual Value",id:"get-actual-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"import",children:(0,l.jsx)(n.code,{children:"Import"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"import refined4s.*\n"})}),"\n",(0,l.jsx)(n.h2,{id:"define-newtype",children:"Define Newtype"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"type NewtypeName = NewtypeName.Type\nobject NewtypeName extends Newtype[ActualType]\n"})}),"\n",(0,l.jsx)(n.p,{children:"e.g.)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"type Name = Name.Type\nobject Name extends Newtype[String]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"create-value",children:"Create Value"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"val newtypeName = NewtypeName(value)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"get-actual-value",children:"Get Actual Value"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"newtypeName.value\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:'type Name = Name.Type\nobject Name extends Newtype[String]\n\ntype Email = Email.Type\nobject Email extends Newtype[String]\n\ndef hello(name: Name): Unit = println(s"Hello ${name.value}")\n\ndef send(email: Email): Unit = println(s"Sending email to ${email.value}")\n\nval name = Name("Kevin")\n// name: Type = "Kevin"\n// Name.Type = "Kevin"\nname.value\n// res0: String = "Kevin"\n\nhello(name)\n// Hello Kevin\n\nval email = Email("kevin@blah.blah")\n// email: Type = "kevin@blah.blah"\n// Email.Type = "kevin@blah.blah"\nemail.value\n// res2: String = "kevin@blah.blah"\n\nsend(email)\n// Sending email to kevin@blah.blah\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:'hello("Kevin")\n// error:\n// Found:    ("Kevin" : String)\n// Required: repl.MdocSession.MdocApp.Name\n// hello("Kevin")\n//       ^^^^^^^\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:'send("kevin@blah.blah")\n// error:\n// Found:    ("kevin@blah.blah" : String)\n// Required: repl.MdocSession.MdocApp.Email\n// send("kevin@blah.blah")\n//      ^^^^^^^^^^^^^^^^^\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>r});var l=a(7294);const t={},i=l.createContext(t);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);