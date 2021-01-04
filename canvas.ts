import * as _ from "isMobile";


const src: string =`
  <div id="img"><img src=""/></div>
  <span id="id"><span id="tab"></span></span>
  <span id="at"><b>@</b><a href=""></a><small><small></span>
`;
const post: string =`
  <div id="post"><p></p></div>
`;
const media: string =`
  <div id="media"></div>
`;
const engage: string =`
  <div id="engage">
    <div id="e1"></div>
    <div id="e2"></div>
    <div id="e3"></div>
    <div id="e4"></div>
  </div>
`;
const canvas: string =`
  ${src}
  ${post}
  ${media}
  ${engage}
`;
const newsfeed: string =`
<div id="newsfeed">
  ${canvas}
</div>
`;
const liveview: string =`
<div id="liveview"></div>
`;
const drops: string =`
<div id="drops"></div>
`;
const journal: string =`
<div id="journal"></div>
`;
const messages: string =`
<div id="messages"></div>
`;
const circles: string =`
<div id="circles"></div>
`;
const passport: string =`
<div id="passport"></div>
`;
const settings: string =`
<div id="settngs"></div>
`;
const synergy: string =`
<div id="synergy"></div>
`;

const c1: string =`
  <div id="c1">${newsfeed}</div>
`;
const c2: string =`
  <div id="c2">${liveview}</div>
`;
const c3: string =`
  <div id="c3">${drops}</div>
`;
const c4: string =`
  <div id="c4">${journal}</div>
`;
const c5: string =`
  <div id="c5">${messages}</div>
`;
const c6: string =`
  <div id="c6">${circles}</div>
`;
const c7: string =`
  <div id="c4">${passport}</div>
`;
const c8: string =`
  <div id="c5">${settings}</div>
`;
const c9: string =`
  <div id="c6">${synergy}</div>
`;

const expo: string =`
  <div id="expo">
    ${c1}
    ${c2}
    ${c3}
  </div>
`;

document.body.innerHTML = expo;
