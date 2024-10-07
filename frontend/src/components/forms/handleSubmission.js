import { toast } from 'react-toastify';
import ConnectionString from '../../connectionString';
const handleSubmit=async (axiosPrivate,form, totalcost, kits, ngoid)=>{    
    form.totalcost=totalcost;
    form.kits=kits;
    form.ngoid=ngoid;
    try{
        const res= await axiosPrivate.post(`${ConnectionString}donateinfo`,form);
        toast.success(res.data.message);
        
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}
export default handleSubmit;