"use client";

import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetcher } from "@/lib/helpers";

export default function List() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
        // Fetch data from the database
       fetcher(process.env.DATABASE_URL)
            .then((response) => {
                console.log(response)
                setLocations(response)
            });
    }, []);

  return (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Noise level</TableCell>
              <TableCell align="left">Crowd level</TableCell>
              <TableCell align="left">Last update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map(location => (
                <TableRow key={location.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                  <TableCell /*sx={{}}*/ component="th" scope="row">{location.name}</TableCell>
                  <TableCell align="left">{location.description}</TableCell>
                  <TableCell align="left">{location.noise_level}</TableCell>
                  <TableCell align="left">{location.noise_level}</TableCell>
                  <TableCell align="left">{location.last_update}</TableCell>
                </TableRow>
            ))}
              </TableBody>
        </Table>);
}
