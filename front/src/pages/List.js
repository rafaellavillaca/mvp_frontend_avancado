import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from "../components/Navbar";
import Grid from '@mui/material/Grid'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import { styled } from '@mui/material/styles';
import Axios from 'axios';
import './pages.css';
import Footer from "../components/Footer";

export default function Monitores() {
   
  const [records, setRecords] = useState([])


  const getRecords = () => {
    fetch('http://127.0.0.1:5000/monitores')
    .then(res => res.json())
    .then(data =>{
       console.log(data.monitores)
      setRecords(data.monitores)

    })
  }

  function handleSubmit(email) {
    const conf = window.confirm("do you want to delete this row?");
    if(conf) {
      Axios.delete('http://127.0.0.1:5000/monitor?email='  + email)
      .then(res => {
        alert("data deleted successfully!")
        setRecords((dadoAnterior) => dadoAnterior.filter((record) => record.email !== email)); 
        console.log(email)

      })
      getRecords()
      
    }

    else { 
      alert("nao foi possivel deletar!");
    }

  }

  useEffect(() => {
    getRecords()
  }, []);

  

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e0e0e0',
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  return (
    <div className="Monitores"> 
      <div className="list">
        <Navbar/>
          <div className= "table-wrapper">
            <table className="table">
              <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} ibm-plex-sans="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Nome</StyledTableCell>
                      <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Email</StyledTableCell>
                      <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Habilidade&nbsp;</StyledTableCell>
                      <StyledTableCell align="center" style={{fontWeight: 'bold'}}>Disponibilidade&nbsp;</StyledTableCell>
                      <StyledTableCell align="center" style={{fontWeight: 'bold'}}><BsFillTrashFill/></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {records.map((record, i) => (
                      
                      <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" align="center"> {record.nome}</TableCell>
                        <TableCell align="center">{record.email}</TableCell>
                        <TableCell align="center">{record.habilidade}</TableCell>
                        <TableCell align="center">{record.disponibilidade}</TableCell>
                        <TableCell align="center"><BsFillTrashFill className="delete" onClick={e=> handleSubmit(record.email)}  /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </table>
          </div>
        </div>   
        <Footer/>           
    </div>
  );
}


