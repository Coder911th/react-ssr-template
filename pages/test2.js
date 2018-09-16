import React from 'react'
import Link from 'Components/Link'

class Test extends React.Component {
    static title = 'Вторая тестовая страница'
    render() {
        return (
            <>
                <Link to="test">Go to test page</Link>
                <h1>Hello World!</h1>
                <button onClick={() => alert('Hello World!')}>Click Me!</button>
            </>
        )
    }
}

export default Test