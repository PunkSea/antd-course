import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';
const namespace = 'puzzlecards';
const mapStateToProps = state => {
  const cardData = state[namespace];
  return {
      data: cardData.data,
      counter: cardData.counter    
  };
};
const maoDispatchToProps = dispatch =>{
    return {
        onClickAdd: newCard =>{
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard
            }
            dispatch(action);             
        },
        onDidMount: ()=>{
            dispatch({
                type: `${namespace}/queryInitCards`              
            });
        }
    }    
}
@connect(mapStateToProps, maoDispatchToProps)
class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.onDidMount();
  }
  addNewCard() {
    this.props.onClickAdd({
        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        punchline: 'here we use dva',
    })    
  }
  render() {
    return (
      <div>
        {
          this.props.data.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={this.addNewCard.bind(this)}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}

export default PuzzleCardsPage;
