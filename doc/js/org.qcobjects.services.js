'use strict';
Package('org.qcobjects.services',[
  Class('QCObjectsVersionService',Service,{
      name:'qcobjects_version_service',
      external:true,
      cached:false,
      method:'GET',
      headers:{'Content-Type':'application/json'},
      url:'https://api.github.com/repos/QuickCorp/QCObjects/tags',
      withCredentials:false,
      _new_:()=>{
        // service instantiated
      },
      done:({request, service})=>{
        var latest = JSON.parse(service.template)[0];
        service.template = {
          version: latest.name
        };
      }
  })
]);
