import { Box, Container, Typography, Grid } from '@mui/material';
// import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';
import ProductCard from '../../../Components/Card/Product Card/ProductCard';
import { Link } from 'react-router-dom';

const UserOrderItem = ({ commonGetRequest, id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        commonGetRequest(`${process.env.REACT_APP_BASE_URL}/api/admin/getorder`, id, setData);
    }, [])
    const total = data.reduce((acc, curr) => (acc + curr.totalAmount), 0);
    return (
        <Container>
            <Typography variant='h6' fontWeight="bold" sx={{ margin: '20px 0', textAlign: 'center' }}>User Orders</Typography>
            {data.length === 0 ?
                <Typography variant='h6' textAlign="center">User not order any thing yet</Typography>
                :
                <>
                    <Typography variant='h6' textAlign='center' sx={{marginBottom: 10}} >Total Amount Spend  <span style={{ color: "#1976d2" }}>₹{total} </span> </Typography>
                    <Box>
                        {
                            data?.map((order, index) =>
                                // <Grid item xs={12}>
                                <>
                                    <Typography variant='h6' textAlign="center">Order {index+1}</Typography>
                                    <Box className='similarProduct' sx={{ display: 'flex', overflowX: 'auto', marginBottom: 10 }}>
                                        {order.productData.products.map((prod) => <Link to={`/Detail/type/${prod.productId.type}/${prod.productId._id}`} key={prod._id}>
                                            <ProductCard prod={prod.productId} />
                                        </Link>)}
                                    </Box>
                                    </>
                                // </Grid >
                            )
                            // return (order?.productData?.products?.map((product => (
                            //     product.productData.map(prod => <Link to={`/Detail/type/${prod.productId.type}/${prod.productId._id}`} key={prod._id}>
                            //         <ProductCard prod={prod.productId} />
                            //     </Link>
                            //     )))))

                        }
                        {/* {
                                data?.productData?.products?.map(product => (
                                    product.productData.map(prod => <Link to={`/Detail/type/${prod.productId.type}/${prod.productId._id}`} key={prod._id}>
                                        <ProductCard prod={prod.productId} />
                                    </Link>
                                    )
                                )
                                )} */}
                    </Box>
                </>
            }
        </Container>

    )
}

export default UserOrderItem