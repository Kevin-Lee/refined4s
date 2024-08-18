"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{7249:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var r=i(4848),d=i(8453);const o={id:"circe",title:"circe module"},c=void 0,t={id:"circe/circe",title:"circe module",description:"Import",source:"@site/../generated-docs/docs/circe/circe.md",sourceDirName:"circe",slug:"/circe/",permalink:"/docs/circe/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"circe",title:"circe module"},sidebar:"docsSidebar",previous:{title:"chimney module",permalink:"/docs/chimney/"},next:{title:"pureconfig module",permalink:"/docs/pureconfig/"}},s={},a=[{value:"Import",id:"import",level:2},{value:"Use Drived Instances for Pre-defined Types",id:"use-drived-instances-for-pre-defined-types",level:2},{value:"With Explicit Pre-defined Circe Support",id:"with-explicit-pre-defined-circe-support",level:2},{value:"With <code>deriving</code> Method",id:"with-deriving-method",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"import refined4s.modules.circe.derivation.types.all.given\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"import refined4s.modules.circe.derivation.*\n"})}),"\n",(0,r.jsx)(n.h2,{id:"use-drived-instances-for-pre-defined-types",children:"Use Drived Instances for Pre-defined Types"}),"\n",(0,r.jsxs)(n.p,{children:["To make ",(0,r.jsx)(n.code,{children:"Newtype"}),", ",(0,r.jsx)(n.code,{children:"Refined"})," and ",(0,r.jsx)(n.code,{children:"InlinedRefined"})," have ",(0,r.jsx)(n.code,{children:"Encoder"})," and ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),") type-class instances derived from the actual values, you can simply use"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"import refined4s.modules.circe.derivation.types.all.given\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"NOTE",type:"warning",children:(0,r.jsxs)(n.p,{children:["This works only when the actual type already has ",(0,r.jsx)(n.code,{children:"Encoder"})," and ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),")."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"refined4s.modules.circe.derivation.types.all.given"})," is required only when ",(0,r.jsx)(n.code,{children:"Encoder"})," and/or ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),") is required for the pre-defined types.",(0,r.jsx)("br",{}),"\nSo if you want your ",(0,r.jsx)(n.code,{children:"Newtype"})," or ",(0,r.jsx)(n.code,{children:"Refined"})," or ",(0,r.jsx)(n.code,{children:"InlinedRefined"})," to have ",(0,r.jsx)(n.code,{children:"Encoder"})," and ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),") instances,",(0,r.jsx)("br",{}),"\nyou can use ",(0,r.jsx)(n.a,{href:"#with-explicit-pre-defined-circe-support",children:"pre-defined traits for circe"})," or the ",(0,r.jsxs)(n.a,{href:"#with-deriving-method",children:[(0,r.jsx)(n.code,{children:"deriving"})," method"]})," instead.",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"import refined4s.*\nimport refined4s.types.all.*\n\nimport io.circe.*\nimport io.circe.syntax.*\n\ndef printJson[A: Encoder](a: A): Unit = println(a.asJson.spaces2)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["With ",(0,r.jsx)(n.code,{children:"derivation.types.all"}),","]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",metastring:"{1}",children:'import refined4s.modules.circe.derivation.types.all.given\n\nfinal case class Person(name: NonEmptyString) derives Codec.AsObject\n\nprintJson(NonEmptyString("Tony Stark"))\n// "Tony Stark"\n\nval thor = Person(NonEmptyString("Thor Odinson"))\n// thor: Person = Person(name = "Thor Odinson")\nprintJson(thor)\n// {\n//   "name" : "Thor Odinson"\n// }\n\nval captainAmerica = Person(NonEmptyString("Steve Rogers"))\n// captainAmerica: Person = Person(name = "Steve Rogers")\nprintJson(captainAmerica)\n// {\n//   "name" : "Steve Rogers"\n// }\n\nimport io.circe.parser.*\n\nprintln(decode[Person]("""{ "name": "Kevin" }"""))\n// Right(Person(Kevin))\n\nprintln(decode[Person]("""{ "name": "" }"""))\n// Left(DecodingFailure(Invalid value: []. It must be a non-empty String, List(DownField(name))))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"with-explicit-pre-defined-circe-support",children:"With Explicit Pre-defined Circe Support"}),"\n",(0,r.jsxs)(n.p,{children:["There are the following pre-defined traits to support circe' ",(0,r.jsx)(n.code,{children:"Encoder"})," and ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),")."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"refined4s.modules.circe.derivation.CirceEncoder"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"refined4s.modules.circe.derivation.CirceNewtypeDecoder"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"refined4s.modules.circe.derivation.CirceRefinedDecoder"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"refined4s.modules.circe.derivation.CirceNewtypeCodec"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"refined4s.modules.circe.derivation.CirceRefinedCodec"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"NOTE",type:"warning",children:(0,r.jsxs)(n.p,{children:["This works only when the actual type already has ",(0,r.jsx)(n.code,{children:"Encoder"})," and ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),")."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",metastring:"{5,8}",children:'import refined4s.*\nimport refined4s.modules.circe.derivation.*\n\ntype Name = Name.Type\nobject Name extends Newtype[String] with CirceNewtypeCodec[String]\n\ntype NotEmptyStr = NotEmptyStr.Type\nobject NotEmptyStr extends Refined[String] with CirceRefinedCodec[String] {\n  inline def invalidReason(a: String): String = "non-empty String"\n\n  inline def predicate(a: String): Boolean = a != ""\n}\n\nimport io.circe.*\n\nfinal case class Person(name: Name) derives Codec.AsObject\n\nfinal case class Item(id: NotEmptyStr) derives Codec.AsObject\n\nimport io.circe.syntax.*\n\ndef printJson[A: Encoder](a: A): Unit = println(a.asJson.spaces2)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'printJson(Name("Tony Stark"))\n// "Tony Stark"\n\nprintJson(NotEmptyStr("Thor Odinson"))\n// "Thor Odinson"\n\nprintJson(Person(Name("Steve Rogers")))\n// {\n//   "name" : "Steve Rogers"\n// }\n\nprintJson(Item(NotEmptyStr("abc-999")))\n// {\n//   "id" : "abc-999"\n// }\n\nimport io.circe.parser.*\n\nprintln(decode[Person]("""{ "name": "Kevin" }"""))\n// Right(Person(Kevin))\n\nprintln(decode[Item]("""{ "id": "a-1234" }"""))\n// Right(Item(a-1234))\n\nprintln(decode[Item]("""{ "id": "" }"""))\n// Left(DecodingFailure(Invalid value: []. non-empty String, List(DownField(id))))\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"with-deriving-method",children:["With ",(0,r.jsx)(n.code,{children:"deriving"})," Method"]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to have explicit ",(0,r.jsx)(n.code,{children:"Encoder"})," and ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),") type-class instances in your ",(0,r.jsx)(n.code,{children:"Newtype"})," or ",(0,r.jsx)(n.code,{children:"Refined"})," or ",(0,r.jsx)(n.code,{children:"InlinedRefined"}),", you can use the ",(0,r.jsx)(n.code,{children:"deriving"})," method."]}),"\n",(0,r.jsx)(n.admonition,{title:"NOTE",type:"warning",children:(0,r.jsxs)(n.p,{children:["This works only when the actual type already has ",(0,r.jsx)(n.code,{children:"Encoder"})," and ",(0,r.jsx)(n.code,{children:"Decoder"})," (or ",(0,r.jsx)(n.code,{children:"Codec"}),")."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",metastring:"{10-11,20-21}",children:'import cats.*\n\nimport refined4s.*\nimport refined4s.modules.circe.derivation.*\n\nimport io.circe.*\n\ntype Name = Name.Type\nobject Name extends Newtype[String] {\n  given encoderName: Encoder[Name] = deriving[Encoder]\n  given decoderName: Decoder[Name] = deriving[Decoder]\n}\n\ntype NotEmptyStr = NotEmptyStr.Type\nobject NotEmptyStr extends Refined[String] {\n  inline def invalidReason(a: String): String = "non-empty String"\n\n  inline def predicate(a: String): Boolean = a != ""\n\n  given encoderNotEmptyStr: Encoder[NotEmptyStr] = deriving[Encoder]\n  given decoderNotEmptyStr: Decoder[NotEmptyStr] = Decoder[String].emap(NotEmptyStr.from)\n}\n\nimport io.circe.*\n\nfinal case class Person(name: Name) derives Codec.AsObject\n\nfinal case class Item(id: NotEmptyStr) derives Codec.AsObject\n\nimport io.circe.syntax.*\n\ndef printJson[A: Encoder](a: A): Unit = println(a.asJson.spaces2)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'printJson(Name("Tony Stark"))\n// "Tony Stark"\n\nprintJson(NotEmptyStr("Thor Odinson"))\n// "Thor Odinson"\n\nprintJson(Person(Name("Steve Rogers")))\n// {\n//   "name" : "Steve Rogers"\n// }\n\nprintJson(Item(NotEmptyStr("abc-999")))\n// {\n//   "id" : "abc-999"\n// }\n\nimport io.circe.parser.*\n\nprintln(decode[Person]("""{ "name": "Kevin" }"""))\n// Right(Person(Kevin))\n\nprintln(decode[Item]("""{ "id": "a-1234" }"""))\n// Right(Item(a-1234))\n\nprintln(decode[Item]("""{ "id": "" }"""))\n// Left(DecodingFailure(Invalid value: []. non-empty String, List(DownField(id))))\n'})})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var r=i(6540);const d={},o=r.createContext(d);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);