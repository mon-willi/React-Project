import { useState,useEffect } from 'react';
import '../Pages/Pages.css';
import { GetApiInvoices } from '../services/service';
function JunInvoices() {
    const [Totals , setTotals] = useState([]);
    useEffect(() => {
        GetApiInvoices()
        .then((res) => (setTotals(res.data)))
        .catch((err) => (console.log(err.message)));
    },[]);
    return ( 
        <>
            <h1 className="container text-center bg-success text-white rounded w-25 py-2 fs-2 mt-4">
                June Invoices
            </h1>
            <table className="table container text-center mt-5 table-hover mb-5">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Internal ID</th>
                        <th scope="col">Invoice Date</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Tax ID</th>
                        <th scope="col">Value</th>
                        <th scope="col">Vat</th>
                        <th scope="col">Wht</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Totals.map((ele, index) => (
                            ele.IssuerId === "100523196"  && ele.IssuanceDatetime.includes("2023-06") ? 
                            <tr key={index} className='table-secondary'>
                            <td>{ele.InternalID}</td>
                            <td>{ele.IssuanceDatetime.substr(-24,10)}</td>
                            <td>{ele.RecevierName}</td>
                            <td>{ele.RecevierId}</td>
                            <td>{ele.TotalNetAmount.toFixed(2)}</td>
                            <td>{ele.TotalVAT.toFixed(2)}</td>
                            <td>{ele.TotalWHT.toFixed(2)}</td>
                            <td>{ele.TotalInvoiceAmount.toFixed(2)}</td>
                        </tr> : ""
                        ))
                    }
                </tbody>
            </table>
        </>
     );
}

export default JunInvoices;