import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
    render(){
      return <div> 
                <Title title={'ToDos'}/>
                <List tasks = {['Wake up at 4:30am', 'Meditate for 10 minutes']}/>
                <List tasks = {['Code for 2 hours', 'Prepare for work']}/>
             </div>
    }
  }

  export default Main