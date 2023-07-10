import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}


const rows1 = [

    
    createData('JPO', 'Infrastruktur', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/JPO_Bina_Marga/FeatureServer/0" target = "_blank" rel="noreferrer">API</a>),
    createData('Sarana Kesehatan', 'Kesehatan', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Dasar_Update_2019/MapServer/3" target = "_blank" rel="noreferrer">API</a>),
    createData('Halte Bus', 'Fasilitas Umum', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Dasar_Update_2019/MapServer/6" target = "_blank" rel="noreferrer">API</a>),
    createData('Sekolah', 'Fasilitas Umum', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Dasar_Update_2019/MapServer/5" target = "_blank" rel="noreferrer">API</a>),
    createData('Jalur Transjakarta', 'Transportasi', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/JakartaSatu/Jalur_Transjakarta/FeatureServer/0" target = "_blank" rel="noreferrer">API</a>),
    createData('Sungai', 'Perairan', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DSDA/Sungai_Jakarta/FeatureServer/0" target = "_blank" rel="noreferrer">API</a>),
    createData('Pintu Air', 'Fasilitas Umum', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DSDA/Pompa__Pintu__Sistem_Polder_View/FeatureServer/0" target = "_blank" rel="noreferrer">API</a>),
    createData('Pompa Air', 'Fasilitas Umum', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DSDA/Pompa__Pintu__Sistem_Polder_View/FeatureServer/1" target = "_blank" rel="noreferrer">API</a>),
    createData('Cagar Budaya', 'Pariwisata', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/CAGAR_BUDAYA/Cagar_Budaya_View/FeatureServer/0" target = "_blank" rel="noreferrer">API</a>),
    createData('Terminal', 'Transportasi', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Terminal_Bandara_Pelabuhan/FeatureServer/0" target = "_blank" rel="noreferrer">API</a>),
    createData('Pelabuhan', 'Transportasi', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Terminal_Bandara_Pelabuhan/FeatureServer/1" target = "_blank" rel="noreferrer">API</a>),
    createData('Bandara', 'Transportasi', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Terminal_Bandara_Pelabuhan/FeatureServer/2" target = "_blank" rel="noreferrer">API</a>),
    createData('Stasiun Kereta Api', 'Transportasi', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Dasar_Update_2019/MapServer/1" target = "_blank" rel="noreferrer">API</a>),
    createData('Gedung Pemerintahan', 'Bangunan', 'WFS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Dasar_Update_2019/MapServer/7" target = "_blank" rel="noreferrer">API</a>),
];

const rows2 = [

    
    createData('Peta Dasar', 'Peta Dasar', 'WMS', <a href="https://tataruang.jakarta.go.id/server/rest/services/peta_dasar/Peta_Dasar_DKI_Jakarta/MapServer" target = "_blank" rel="noreferrer">API</a>),
    createData('Peta Struktur', 'Peta Struktur', 'WMS', <a href="https://jakartasatu.jakarta.go.id/server/rest/services/DCKTRP/Peta_Struktur_Jakarta_2018_Garis/MapServer" target = "_blank" rel="noreferrer">API</a>),
    createData('Batas Administrasi', 'Batas Administrasi', 'WMS', <a href="https://tataruang.jakarta.go.id/server/rest/services/Batas_Administrasi_Update/Batas_Administrasi_DKI_Jakarta_Update_View/MapServer" target = "_blank" rel="noreferrer">API</a>)
];

export function CustomizedTables() {
    return (
        <TableContainer
            component={Paper}
            sx={{margin : "50px"}}>
            <Table sx={{ maxWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Deskripsi</StyledTableCell>
                        <StyledTableCell>Format</StyledTableCell>
                        <StyledTableCell>Link API</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows1.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell>{row.calories}</StyledTableCell>
                            <StyledTableCell>{row.fat}</StyledTableCell>
                            <StyledTableCell>{row.carbs}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export function CustomizedTables2() {
    return (
        <TableContainer
            component={Paper}
            sx={{margin : "50px"}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Deskripsi</StyledTableCell>
                        <StyledTableCell>Format</StyledTableCell>
                        <StyledTableCell>Link API</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell>{row.calories}</StyledTableCell>
                            <StyledTableCell>{row.fat}</StyledTableCell>
                            <StyledTableCell>{row.carbs}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}