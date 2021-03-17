import { FC, useState } from 'react';

const IncrementButton: FC = () => {
    const [count, setCount] = useState<number>(0);
    function increment() {
        setCount(count + 1);
    }
    return (
        <div>
            <button type={'button'} onClick={increment}>
                {'increment'}
            </button>
            <span>{count.toString()}</span>
        </div>
    );
};

export { IncrementButton };
export default IncrementButton;
