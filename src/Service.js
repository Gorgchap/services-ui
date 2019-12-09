import './App.css';
import { Button, Card } from 'react-bootstrap';
import React, { useState, useEffect } from "react";

const notStarted = <button type="button" className="btn btn-secondary btn-circle btn-xl">Not started</button>;
const progress = <button type="button" className="btn btn-danger btn-circle">In progress</button>;
const ready = <button type="button" className="btn btn-success btn-circle">Ready</button>;

function Service(props) {
    const [isReady, setIsReady] = useState(false);
    const [isNotStarted, setIsNotStarted] = useState(true);
    useEffect(() => {
        if (!isNotStarted) {
            const timer = setTimeout(() => setIsReady(!isReady), 5000);
            return () => clearTimeout(timer);
        }
    });
    function onClick() {
        if (isNotStarted) { setIsNotStarted(false); }
        else { setIsReady(false); setIsNotStarted(true); }
    }
    return <Card className="service-card" {...props}>
        <Card.Body style={{ padding: '.75rem' }}>
            <Card.Title style={{ textAlign: 'center' }}>{props.name ? props.name : 'Default service'}</Card.Title>
            {isNotStarted ? notStarted : isReady ? ready : progress}
            <Card.Text style={{ margin: 0 }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button onClick={onClick} style={{ display: 'block', margin: '.75rem auto 0', width: '35%' }} variant="primary">
                {isNotStarted ? 'Start' : 'Stop'}
            </Button>
        </Card.Body>
    </Card>
}
export default Service;
