import React from 'react';
import {Input} from './Input';
import {Filter} from './Filter';
import {TodoItem} from './TodoItem';


const getKey = () => Math.random().toString(32).substring(2);
function Todo() {
    const [items, setItems] = React.useState([
        {key: getKey(), text: 'Learn Javascript', done: false},
        {key: getKey(), text: 'Learn React', done: false},
        {key: getKey(), text: 'Get some good sleep', done: false}
    ])
    const [filter, setFilter] = React.useState('ALL')
    const onhandleCheck = checked => {
        const newItems = items.map(item => {
            if(item.key == checked.key){
                item.done = !item.done;
            }
            return item;
        });
        setItems(newItems);
    };
    const handleAdd = text => {
        setItems([...items, {key: getKey(), text: text, done: false}]);
    };
    const handleFilterChange = value => setFilter(value);
    const displayItems = items.filter(item => {
       if(filter === 'ALL') return true;
       if(filter === 'TODO') return !item.done;
       if(filter === 'DONE') return item.done;
    });
    return (
        <div className="panel">
            <div className="panel-heading">
                React ToDo
            </div>
            <Input onAdd={handleAdd} />
            <Filter
                onChange={handleFilterChange}
                value={filter}
            />
            {displayItems.map(item => (
                <TodoItem key={item.key} item={item} onCheck={onhandleCheck} />    
            ))}
            <div className="panel-block">
                {displayItems.length} items
            </div>
        </div>
    );
}

export default Todo;