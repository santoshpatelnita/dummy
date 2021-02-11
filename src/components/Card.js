import React from 'react'
import { useSelector } from 'react-redux'
import { Card, ListGroup } from 'react-bootstrap'


export default function CardCom() {
    const formData = useSelector(state => state.form_data)
    // const formData2=localStorage.getItem("details")
    // var x=[];
    // x.push(JSON.parse(formData2));
    // const formData=x;

    console.log(formData)
    return (
        <div style={{ display: 'flex' }}>

            {
                formData.map((item, key) =>
                <div>
                    
                    <Card style={{ width: '18rem' }} key={key}>
                        <ListGroup variant="flush" style={{ marginLeft: 20 }}>
                            <ListGroup.Item>{item.ingredientName}</ListGroup.Item>
                            <ListGroup.Item>{item.ingredientQuantity}</ListGroup.Item>
                            <ListGroup.Item>{item.nameOfTheDish}</ListGroup.Item>
                            <ListGroup.Item>{item.stepsToCook}</ListGroup.Item>
                            <ListGroup.Item>{item.unitIngredientQTY}</ListGroup.Item>
                            <img src={item.pictureURL} alt='picture' />
                        </ListGroup>
                    </Card>
                </div>
            )}
        </div>
    )
}