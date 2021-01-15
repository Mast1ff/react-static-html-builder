import * as React from 'react';

const IncrementButton: React.FC = ({}) => {
    const [count, setCount] = React.useState<number>(0);
    function increment() {
        setCount(count + 1);
    }
    return (
        <div>
            <button
                type={ 'button' }
                onClick={ increment }
            >
                {'increment'}
            </button>
            <span>
                {count.toString()}
            </span>
        </div>
    );
};

export { IncrementButton };
export default IncrementButton;
