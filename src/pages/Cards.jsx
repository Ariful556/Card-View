
import { Row } from 'react-bootstrap';
import CardView from './CardView';
import { useEffect, useState } from 'react';

function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
    }, [])
    return (
        <div style={{ backgroundColor: '#ffffe6' }} >
            <h2 className='pt-3 text-center'> Mens Details</h2>
            <Row id='cards' xs={1} md={2} className="g-4 m-3">
                {
                    data.slice(0, 6).map(user => <CardView
                        key={data.key}
                        card={user}
                    ></CardView>)
                }
            </Row>
        </div>
    );
}

export default Cards;