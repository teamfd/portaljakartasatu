import React from 'react';
import { TextField } from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Navbar2 from "../../src/components/appBar/Navbar2";
import {
    BoxImage1,
    BoxImage2,
    BoxTitle,
    BoxContainer,
    BoxLittleTitle,
    Dividers,
} from "../routes/routeStyle/SimpulJaringanStyle";
import '../routes/routeStyle/SimpulJaringanCSS.css';

const SimpulJaringan = () => {
    const datas = [
        "Pariwisata",
        "Transportasi Publik",
        "3D Urban Kemayoran",
        "Saluran",
        "111",
        "222",
        "333",
        "444",
        "555",
        "666",
        "777",
        "888",
        "999",
        "121221",
        "21312312",
        "1241234124",
        "123123",
        "34234",
    ];

    const firstIndex = 0;

    const [pageSize] = React.useState(4);
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState(datas.slice(firstIndex, pageSize));

    React.useEffect(() => {
        setData(datas.slice(0, pageSize));
    }, [pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event, value) => {
        setPage(value);
        setData(datas.slice(firstIndex + pageSize * (value - 1), pageSize * value))
    }

    return (
        <>
            <Navbar2 />
            <BoxImage1 src="/images/menuPeta/Rectangle_1.png" />
            <BoxImage2 src="/images/menuPeta/bentuk.png" />
            <BoxContainer>
                <BoxTitle>Simpul Jaringan Spasial</BoxTitle>
                <Dividers />
                <BoxLittleTitle>
                    Data spasial yang terintegrasi, nikmati solusi mudah dalam pengintegrasian data
                </BoxLittleTitle>
                <TextField
                    className="inputRounded"
                    placeholder="Cari..."
                    variant="outlined"
                    size="small"
                />

                <div>
                    <ul>
                        {data.map((d, i) => (
                            <li key={i} className='lists'>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <Stack alignItems="center" spacing={2}>
                        <Pagination
                            className="pagination"
                            shape="rounded"
                            count={5}
                            page={page}
                            onChange={handleChange} />
                    </Stack>
                </div>
            </BoxContainer>
        </>
    );
};

export default SimpulJaringan;