import React from 'react';
var classNames = require('classnames');
export function TodoItem({item, onCheck}) {
    const handleChange = () => {
        onCheck(item);
    };
    return (
        <label className="panel-block">
            <input type="checkbox" checked={item.done} onClick={handleChange} />
            <span className={classNames({
                'has-text-grey-light': item.done
            })}>
                {item.text}
            </span>
        </label>
    );
}