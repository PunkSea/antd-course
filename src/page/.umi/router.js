import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../Layout/BasicLayout.js').default,
    "indexRoute": {
      "component": require('../Helloworld').default
    },
    "childRoutes": [
      {
        "path": "helloworld",
        "component": require('../Helloworld').default
      },
      {
        "path": "puzzlecards",
        "component": require('../puzzlecards').default
      },
      {
        "path": "dashboard",
        "childRoutes": [
          {
            "path": "analysis",
            "component": require('../dashboard/Analysis').default
          },
          {
            "path": "monitor",
            "component": require('../dashboard/Monitor').default
          },
          {
            "path": "workplace",
            "component": require('../dashboard/Workplace').default
          }
        ]
      }
    ],
    "exact": true
  },
  {
    "path": "/puzzlecards",
    "component": require('../puzzlecards').default,
    "exact": true
  },
  {
    "path": "/list",
    "component": require('../list/index.js').default,
    "exact": true
  },
  {
    "component": () => React.createElement(require('/Users/haichaos/Desktop/wanmeiproject/antd-course/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/page', hasRoutesInConfig: true })
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
