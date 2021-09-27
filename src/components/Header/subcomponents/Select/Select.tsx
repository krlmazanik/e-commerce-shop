import React from 'react';
import { Select as AntSelect } from 'antd';
import './Select.scss';

interface ISelectProps {
  onChange: () => void;
  options: { value: string; label: string }[];
}

const Select = (props: ISelectProps):JSX.Element => {
    const { onChange, options } = props;

    return (
        <AntSelect
            defaultValue="en"
            bordered={false}
            options={options}
            className="select"
            dropdownClassName="dropdown"
            onChange={onChange}
        />
    );
};

export { Select };
