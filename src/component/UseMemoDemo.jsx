import React, { useState, useMemo } from 'react'

const UseMemoDemo = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    const calculate = useMemo(() => {
        return calculating(count)
    }, [count])

    const addData = () => {
        setData([...data, 'add data'])
    }

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            {
                data.map((item, idx) => {
                    return <p key={idx}>{item}</p>
                })
            }
            <button onClick={addData}>Add Data</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculate}
        </div>
    )
}

const calculating = (num) => {
    console.log("calculating")
    for (let i = 0; i < 500000000; i++) {
        num += 1
    }
    return num
}

export default UseMemoDemo
