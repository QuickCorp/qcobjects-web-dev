'use strict';
Package('org.qcobjects.frontend.api.client',[
  Class("NPMRegistryService", Service,{
    name: "npm_registry",
    external: false,
    cached: true,
    method: "GET",
    headers:{
      "Content-Type": "application/json"
    },
    url: "https://registry.npmjs.org/qcobjects",
    withCredentials: false,
    _new_: ()=>{
      // service instantiated
    },
    done({request, service}){
      console.log (service.template);
    }

  })
]);
