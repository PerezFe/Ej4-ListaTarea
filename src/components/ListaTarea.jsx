import React from 'react';
import ItemTarea from './ItemTarea';
import {ListGroup, button} from 'react-bootstrap';


const ListaTarea = ({propsArregloTarea, borrarTarea}) => {


    return (
        <ListGroup>
            {
                propsArregloTarea.map( (tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
            }
      
    </ListGroup>
    );
};

export default ListaTarea;