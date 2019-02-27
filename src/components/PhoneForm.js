import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            // e.target.name: handleCange를 요청하는 것의 name을 받아와서 설정. 결국 name, phone 등 모두 들어 갈 수 있다.
            // state의 name: '', phone: '' 모두 가능
           [e.target.name]: e.target.value
        });
    }

    handleSumbit = (e) => {
        // 원래 해야할 작업을 방지시켜주는. submit을 하면 새로고침이되서 그것을 막으려고
       e.preventDefault();
       this.props.onCreate(this.state);
       this.setState({
           name: '',
           phone: ''
       })
    }
    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <br/>
                {this.state.name}
                <br/>
                {this.state.phone}
                <br/>
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;