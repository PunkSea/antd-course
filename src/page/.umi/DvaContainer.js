import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'list', ...(require('/Users/haichaos/Desktop/wanmeiproject/antd-course/src/model/list.js').default) });
app.model({ namespace: 'puzzlecards', ...(require('/Users/haichaos/Desktop/wanmeiproject/antd-course/src/model/puzzlecards.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
