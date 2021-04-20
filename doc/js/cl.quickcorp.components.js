"use strict";
Package("cl.quickcorp.components",[
  Class("MarkdownComponent",Component,{
    dependencies:[],
    name:"markdowncomponent",
    templateURI:"",
    tplsource:"none",
    cached:false,
    controller:null,
    view:null,
    templateHandler: "MarkdownTemplateHandler"
  }),
  Class('CustomMarkdownComponent',Component,{
    dependencies:[],
    body:document.createElement('div'),
    name:'readmemarkdowncomponent',
    tplsource:'external',
    cached:true,
    controller:null,
    view:null,
    templateHandler: 'MarkdownTemplateHandler',
    done:function (){
      _super_('Component','done').call(this);
    }
  }),
  Class('ReadmeMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    name:"readmemarkdowncomponent",
    templateURI:"./README.md"
  }),
  Class('AuthorMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    templateURI:"./AUTHOR.md"
  }),
  Class('ContributingMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    templateURI:"./CONTRIBUTING.md"
  }),
  Class('CoCMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    templateURI:"./CODE_OF_CONDUCT.md"
  })
]);
