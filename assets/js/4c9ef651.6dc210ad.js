"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[320],{5217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(4848),r=t(8453);const i={id:"cats",title:"cats module"},o=void 0,s={id:"cats/cats",title:"cats module",description:"Import",source:"@site/../generated-docs/docs/cats/cats.md",sourceDirName:"cats",slug:"/cats/",permalink:"/docs/cats/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"cats",title:"cats module"},sidebar:"docsSidebar",previous:{title:"Newtype + Refined",permalink:"/docs/core/newtype-refined/"},next:{title:"circe module",permalink:"/docs/circe/"}},l={},d=[{value:"Import",id:"import",level:2},{value:"Use Drived Instances for Pre-defined Types",id:"use-drived-instances-for-pre-defined-types",level:2},{value:"With Explicit Pre-defined Cats Support",id:"with-explicit-pre-defined-cats-support",level:2},{value:"With <code>deriving</code> Method",id:"with-deriving-method",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:"import refined4s.modules.cats.derivation.types.all.given\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:"import refined4s.modules.cats.derivation.*\n"})}),"\n",(0,a.jsx)(n.h2,{id:"use-drived-instances-for-pre-defined-types",children:"Use Drived Instances for Pre-defined Types"}),"\n",(0,a.jsxs)(n.p,{children:["To make ",(0,a.jsx)(n.code,{children:"Newtype"}),", ",(0,a.jsx)(n.code,{children:"Refined"})," and ",(0,a.jsx)(n.code,{children:"InlinedRefined"})," have ",(0,a.jsx)(n.code,{children:"Eq"})," and ",(0,a.jsx)(n.code,{children:"Show"})," type-class instances derived from the actual values, you can simply use"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:"import refined4s.modules.cats.derivation.types.all.given\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"NOTE",type:"warning",children:(0,a.jsxs)(n.p,{children:["This works only when the actual type already has ",(0,a.jsx)(n.code,{children:"Eq"})," and ",(0,a.jsx)(n.code,{children:"Show"}),"."]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Using ",(0,a.jsx)(n.code,{children:"refined4s.modules.cats.derivation.types.all.given"})," is required only when ",(0,a.jsx)(n.code,{children:"Eq"})," and/or ",(0,a.jsx)(n.code,{children:"Show"})," is used.",(0,a.jsx)("br",{}),"\nSo if you want your ",(0,a.jsx)(n.code,{children:"Newtype"})," or ",(0,a.jsx)(n.code,{children:"Refined"})," or ",(0,a.jsx)(n.code,{children:"InlinedRefined"})," to have ",(0,a.jsx)(n.code,{children:"Eq"})," and ",(0,a.jsx)(n.code,{children:"Show"})," instances,",(0,a.jsx)("br",{}),"\nyou can use ",(0,a.jsx)(n.a,{href:"#with-explicit-pre-defined-cats-support",children:"pre-defined traits for cats"})," or the ",(0,a.jsxs)(n.a,{href:"#with-deriving-method",children:[(0,a.jsx)(n.code,{children:"deriving"})," method"]})," instead.",(0,a.jsx)("br",{})]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import refined4s.*\n\ntype Name = Name.Type\nobject Name extends Newtype[String]\n\ntype NotEmptyStr = NotEmptyStr.Type\nobject NotEmptyStr extends Refined[String] {\n  inline def invalidReason(a: String): String = "non-empty String"\n\n  inline def predicate(a: String): Boolean = a != ""\n}\n\nimport cats.*\nimport cats.syntax.all.*\n\ndef hello[A: Show](a: A): Unit = println(show"Hello $a")\n\ndef equal[A: Eq](a1: A, a2: A): Unit =\n  if Eq[A].eqv(a1, a1) then println("The given values are equal.")\n  else println("The given values are not equal.")\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["With ",(0,a.jsx)(n.code,{children:"derivation.types.all"}),","]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",metastring:"{1}",children:'import refined4s.modules.cats.derivation.types.all.given\n\nhello(NonEmptyString("Peter Parker"))\n// Hello Peter Parker\n\nhello(Name("Tony Stark"))\n// Hello Tony Stark\n\nhello(NotEmptyStr("Thor Odinson"))\n// Hello Thor Odinson\n\nequal(NonEmptyString("Peter Parker"), NonEmptyString("Peter Parker"))\n// The given values are equal.\nequal(NonEmptyString("Peter Parker"), NonEmptyString("Natasha Romanoff"))\n// The given values are not equal.\n\nequal(Name("Tony Stark"), Name("Tony Stark"))\n// The given values are equal.\nequal(Name("Tony Stark"), Name("Steve Rogers"))\n// The given values are not equal.\n\nequal(NotEmptyStr("Thor Odinson"), NotEmptyStr("Thor Odinson"))\n// The given values are equal.\nequal(NotEmptyStr("Thor Odinson"), NotEmptyStr("Bruce Banner"))\n// The given values are not equal.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Without ",(0,a.jsx)(n.code,{children:"derivation.types.all"}),","]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'hello(NonEmptyString("Kevin"))\n// error:\n// Not found: NonEmptyString\n// def hello[A: Show](a: A): Unit = println(show"Hello $a")\n//                   ^\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'hello(Name("Kevin"))\n// error:\n// No given instance of type cats.Show[repl.MdocSession.MdocApp.Name.Type] was found for a context parameter of method hello in object MdocApp\n//   inline def predicate(a: String): Boolean = a != ""\n//\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'hello(NotEmptyStr("Kevin"))\n// error:\n// No given instance of type cats.Show[repl.MdocSession.MdocApp.NotEmptyStr.Type] was found for a context parameter of method hello in object MdocApp\n// def hello[A: Show](a: A): Unit = println(show"Hello $a")\n//                                                         ^\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'equal(NonEmptyString("Kevin"), NonEmptyString("Kevin"))\n// error:\n// Not found: NonEmptyString\n//   inline def predicate(a: String): Boolean = a != ""\n//                       ^\n// error:\n// Not found: NonEmptyString\n// def hello[A: Show](a: A): Unit = println(show"Hello $a")\n//                          ^\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'equal(Name("Kevin"), Name("Kevin"))\n// error: \n// No given instance of type cats.kernel.Eq[repl.MdocSession.MdocApp.Name.Type] was found for a context parameter of method equal in object MdocApp\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'equal(NotEmptyStr("Kevin"), NotEmptyStr("Kevin"))\n// error:\n// No given instance of type cats.kernel.Eq[repl.MdocSession.MdocApp.NotEmptyStr.Type] was found for a context parameter of method equal in object MdocApp\n// def equal[A: Eq](a1: A, a2: A): Unit =\n//\n'})}),"\n",(0,a.jsx)(n.h2,{id:"with-explicit-pre-defined-cats-support",children:"With Explicit Pre-defined Cats Support"}),"\n",(0,a.jsxs)(n.p,{children:["There are the following pre-defined traits to support cats' ",(0,a.jsx)(n.code,{children:"Eq"})," and ",(0,a.jsx)(n.code,{children:"Show"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"refined4s.modules.cats.derivation.CatsEq"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"refined4s.modules.cats.derivation.CatsShow"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"refined4s.modules.cats.derivation.CatsEqShow"})}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"NOTE",type:"warning",children:(0,a.jsxs)(n.p,{children:["This works only when the actual type already has ",(0,a.jsx)(n.code,{children:"Eq"})," and ",(0,a.jsx)(n.code,{children:"Show"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",metastring:"{5,8}",children:'import refined4s.*\nimport refined4s.modules.cats.derivation.*\n\ntype Name = Name.Type\nobject Name extends Newtype[String] with CatsEqShow[String]\n\ntype NotEmptyStr = NotEmptyStr.Type\nobject NotEmptyStr extends Refined[String] with CatsEqShow[String] {\n  inline def invalidReason(a: String): String = "non-empty String"\n\n  inline def predicate(a: String): Boolean = a != ""\n}\n\nimport cats.*\nimport cats.syntax.all.*\n\ndef hello[A: Show](a: A): Unit = println(show"Hello $a")\n\ndef equal[A: Eq](a1: A, a2: A): Unit =\n  if Eq[A].eqv(a1, a1) then println("The given values are equal.")\n  else println("The given values are not equal.")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'hello(Name("Tony Stark"))\n// Hello Tony Stark\n\nhello(NotEmptyStr("Thor Odinson"))\n// Hello Thor Odinson\n\nequal(Name("Tony Stark"), Name("Tony Stark"))\n// The given values are equal.\nequal(Name("Tony Stark"), Name("Steve Rogers"))\n// The given values are not equal.\n\nequal(NotEmptyStr("Thor Odinson"), NotEmptyStr("Thor Odinson"))\n// The given values are equal.\nequal(NotEmptyStr("Thor Odinson"), NotEmptyStr("Bruce Banner"))\n// The given values are not equal.\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"with-deriving-method",children:["With ",(0,a.jsx)(n.code,{children:"deriving"})," Method"]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to have explicit ",(0,a.jsx)(n.code,{children:"Eq"})," and ",(0,a.jsx)(n.code,{children:"Show"})," type-class instances in your ",(0,a.jsx)(n.code,{children:"Newtype"})," or ",(0,a.jsx)(n.code,{children:"Refined"})," or ",(0,a.jsx)(n.code,{children:"InlinedRefined"}),", you can use the ",(0,a.jsx)(n.code,{children:"deriving"})," method."]}),"\n",(0,a.jsx)(n.admonition,{title:"NOTE",type:"warning",children:(0,a.jsxs)(n.p,{children:["This works only when the actual type already has ",(0,a.jsx)(n.code,{children:"Eq"})," and ",(0,a.jsx)(n.code,{children:"Show"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",metastring:"{8-9,18-19}",children:'import cats.*\n\nimport refined4s.*\nimport refined4s.modules.cats.derivation.*\n\ntype Name = Name.Type\nobject Name extends Newtype[String] {\n  given eqName: Eq[Name] = deriving[Eq]\n  given showName: Show[Name] = deriving[Show]\n}\n\ntype NotEmptyStr = NotEmptyStr.Type\nobject NotEmptyStr extends Refined[String] with CatsEqShow[String] {\n  inline def invalidReason(a: String): String = "non-empty String"\n\n  inline def predicate(a: String): Boolean = a != ""\n\n  given eqNotEmptyStr: Eq[NotEmptyStr] = deriving[Eq]\n  given showNotEmptyStr: Show[NotEmptyStr] = deriving[Show]\n}\n\nimport cats.*\nimport cats.syntax.all.*\n\ndef hello[A: Show](a: A): Unit = println(show"Hello $a")\n\ndef equal[A: Eq](a1: A, a2: A): Unit =\n  if Eq[A].eqv(a1, a1) then println("The given values are equal.")\n  else println("The given values are not equal.")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'hello(Name("Tony Stark"))\n// Hello Tony Stark\n\nhello(NotEmptyStr("Thor Odinson"))\n// Hello Thor Odinson\n\nequal(Name("Tony Stark"), Name("Tony Stark"))\n// The given values are equal.\nequal(Name("Tony Stark"), Name("Steve Rogers"))\n// The given values are not equal.\n\nequal(NotEmptyStr("Thor Odinson"), NotEmptyStr("Thor Odinson"))\n// The given values are equal.\nequal(NotEmptyStr("Thor Odinson"), NotEmptyStr("Bruce Banner"))\n// The given values are not equal.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(6540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);