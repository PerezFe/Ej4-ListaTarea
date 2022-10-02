import React from 'react';
import ItemTarea from './ItemTarea';
import {ListGroup, button} from 'react-bootstrap';


const ListaTarea = ({propsArregloTarea}) => {


    return (
        <ListGroup>
            {
                propsArregloTarea.map( (tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea}></ItemTarea>)
            }
      
    </ListGroup>
    );
};

export default ListaTarea;