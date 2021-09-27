import React from 'react';
import { Switch as AntSwitch } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './Switch.scss';

interface ISwitchProps {
  onChange: () => void;
}

const Switch = (props: ISwitchProps): JSX.Element => {
    const { onChange } = props;

    return (
        <AntSwitch
            checkedChildren={<EyeOutlined />}
            unCheckedChildren={<EyeInvisibleOutlined />}
            defaultChecked
            className="switch"
            onChange={onChange}
        />
    );
};

export { Switch };
