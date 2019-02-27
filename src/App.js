import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    // React는 불변성을 꼭 유지해야한다. 어떤 값을 수정할때는 언제나 setState를 사용한다.
    // 내부의 배열, 객체 수정 시 그것을 기반으로 새로운 객체 배열을 만들어서 값을 주입해야한다. (concat 배열 내장함수 사용)
    this.setState({
      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))
    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
