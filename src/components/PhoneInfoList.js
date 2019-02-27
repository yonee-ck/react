import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    // this.props의 데이터를 전달받지 못한 경우 렌더링 할 수 없다고 에러가 뜨므로 defaultProps를 설정.
    static defaultProps = {
        data: []
    }
    render() {
        const { data } = this.props;
        // info들의 배열을 가지고 phoneinfo component로 변환해줌. 그것을 렌더링
        const list = data.map(
            // key를 설정 안할 경우 배열의 index가 키값으로 설정. but key가 없다고 콘솔 에러.
            info => (<PhoneInfo info={info} key={info.id} />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;