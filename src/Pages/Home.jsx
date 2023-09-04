import { useState,useEffect } from 'react';
import '../Pages/Pages.css';
import { GetApiInvoices } from '../services/service';


function Home() {
    const [Totals , setTotals] = useState([]);
    useEffect(() => {
        GetApiInvoices()
        .then((res) => (setTotals(res.data)))
        .catch((err) => (console.log(err.message)));
    },[]);
    return ( 
        <>
        <h1 className="container text-center bg-secondary text-white rounded w-50 py-2 fs-2 mt-4">
            Technocom For Commercial Agiences
        </h1>
            <table class="table table-secondary table-striped-columns container text-center mt-5 mb-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Value</th>
                        <th scope="col">Vat</th>
                        <th scope="col">Wht</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Totals.map((ele , index) => (
                        ele.id === "inv1" &&
                        <tr>
                        <td key={index}>{ele.Date}</td>
                        <td key={index}>{ele.Value}</td>
                        <td key={index}>{ele.Vat}</td>
                        <td key={index}>{ele.Wht}</td>
                        <td key={index}>{ele.Total}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </>
     );
}

export default Home;