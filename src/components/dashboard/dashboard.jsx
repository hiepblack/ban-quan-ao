import React, { useEffect, useState } from 'react';
import "./dashboard.css"
import LineChart from '../chart/chart';
import PieChart from '../chart/pieChart';
import { getAllorder } from '../../api/order';
import {ArrowUpOutlined,ArrowDownOutlined} from '@ant-design/icons'
import { CiCoinInsert,CiCircleList,CiUser,CiShoppingCart,CiViewBoard } from "react-icons/ci";
const Dashboard = (props) => {
    const [orders,setorder] = useState([]);
    useEffect(()=>{
        getAllorder().then(({data})=>setorder(data.arr))
    },[])
    const revenue =[]
    for(let i = 0 ;i<orders?.length;i++){
       revenue.push(orders[i].reduce((acc, val) => acc + val, 0))
     }
	  const date = new Date();
	  const getMonth = date.getMonth();
	  const sales = (revenue[getMonth]-revenue[getMonth-1])/revenue[getMonth-1]*100
	  console.log(sales);
  return(
    <>
	<div style={{marginBottom:"15px"}}>

	</div>
		<div class="content">
			
			<div class="info-box">
				<div class="box-icon">
				<span class="big"><CiViewBoard/></span>
				</div>
				
				<div class="box-content">
					<span class="big">{props.products.length}</span>
					Số Lượng sản phẩm
				</div>
			</div>
			
			<div class="info-box">
				<div class="box-icon">
					<span class="big"><CiCircleList/></span>
				</div>
				
				<div class="box-content">
					<span class="big">{props.cates.length}</span>
					Số lượng danh mục
				</div>
			</div>
			
			<div class="info-box active">
				<div class="box-icon">
				<span class="big"><CiUser/></span>
				</div>
				
				<div class="box-content">
					<span class="big">{props.users.length}</span>
					Thành viên
				</div>
			</div>
			
			<div class="info-box">
				<div class="box-icon">
				<span class="big"><CiShoppingCart/></span>
				</div>
				
				<div class="box-content">
					<span class="big">{props.order.length}</span>
					Số lượng Đơn hàng
				</div>
			</div>
			<div class="info-box">
				<div class="box-icon">
					<span class="big"><CiCoinInsert/>{revenue[getMonth]?.toLocaleString('vn')}</span>
				</div>
				
				<div class="box-content">
					{sales>0? <span style={{color:"green"}}> <ArrowUpOutlined /> {sales.toFixed()}%</span>: <span style={{color:"red"}}> <ArrowDownOutlined /> {sales.toFixed()}%</span>}
					<div >Doanh thu</div>
				</div>
			</div>
			
		</div>
		<div className='chart'>
			<LineChart revenue={revenue} className='line_chart'/>
			<PieChart className='line_chart'/>
		</div>
	</>
  )
};
export default Dashboard;