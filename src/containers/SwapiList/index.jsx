import React, { useEffect, useState } from 'react';
import charactersService from '../../services/characters';
import { useSelector, useDispatch } from 'react-redux';
import {setCharacter, setPageNumber} from '../../store/actions/characters';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SwapiList = () => {
    const dispatch = useDispatch();
    const pageNumber = useSelector(
        (state) => state.characters.pageNumber
    );
    const [data, setData] = useState([]);
    useEffect(() => {
        charactersService.getCharacters(pageNumber).then((data) => {
            setData(data);
        }).catch(() => {
            setData([])
        })
    }, [pageNumber]);

    const handleSetCharacter = (character) => {
        dispatch(setCharacter(character));
    }

    const handlePageChange = (number) => {
        dispatch(setPageNumber(number))
    }

    return (
        <div>
            <h2>Page number {pageNumber}</h2>
            <List>
                {data.map((item, index) => {
                    return (
                        <ListItem key={`${item.name + index}`} onClick={() => handleSetCharacter(item.name)}>
                            {item.name}
                        </ListItem>
                    )
                })}
            </List>
            <Button variant="contained" color="primary" onClick={() => handlePageChange(-1)}>
                Prev
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handlePageChange(1)}>
                Next
            </Button>
        </div>
    )
}

export default SwapiList
