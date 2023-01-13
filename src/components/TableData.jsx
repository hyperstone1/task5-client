import React, { useState, useEffect, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { nanoid } from 'nanoid';
import { useLazyLoading } from '../hooks/useLazyLoading';
import { TablePagination } from '@mui/material';
import axios from 'axios';

const TableData = ({ seed, locale, errProbability }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isNaN(seed)) {
          alert('seed must be a number!');
        } else {
          const { data } = await axios.post('http://localhost:5000/api/user/users', {
            page: 1,
            locale: locale,
            errProb: errProbability,
            seed,
          });
          setUsers(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [locale, seed, errProbability]);

  const appendItems = useCallback(async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/user/users', {
        page: page + 1,
        locale: locale,
        errProb: errProbability,
        seed: seed,
      });
      setPage(page + 1);
      setUsers([...users, ...data]);
    } catch (err) {
      console.log(err);
    }
  }, [users, setUsers]);

  const [onScroll, containerRef] = useLazyLoading({
    onIntersection: appendItems,
    delay: 1200,
  });


  return (
    <Paper sx={{ height: '100%' }}>
      <TableContainer ref={containerRef} onScroll={onScroll} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">address</TableCell>
              <TableCell align="right">phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 &&
              users.map((item, id) => (
                <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{item.number}</TableCell>
                  <TableCell align="right">{item.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.address}</TableCell>
                  <TableCell align="right">{item.phone}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableData;
