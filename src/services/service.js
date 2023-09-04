import axios, { Axios } from "axios";


export async function GetApiInvoices(){
    return await axios.get("http://localhost:9000/invoices");
}
