  "use client"
import { db } from "@/config/firebase.config";
import { TextField } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useFormik } from "formik";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import * as yup from "yup";

const schema = yup.object().shape({
    repaymentAmount:yup.number().required("Repayment amount is required").min(1000)
})


export default function Loan (){
    const {id}  = useParams();
    const router = useRouter()
    const [loan,setLoan]= useState(null);
    const [showInput,setShowInput] = useState(false)
    

        useEffect(()=>{
            const fetchLoan =async ()=>{
                try{
                     const docRef = doc(db,"loaans",id);
                     const snapShot = await getDoc(docRef);
                     if (!snapShot){
                        router.push("/dashboard/loan-history")
                        setLoan({
                            id,
                            ...snapShot.data()
                        });
                     }
                }
                catch(errors){
                    console.error("unable to fetch",errors)

                }
            }
             fetchLoan();
        },[id])

        const {handleSubmit, handleChange,values,touched,errors}= useFormik({
               initialValues:{
                repaymentAmount : ""
               },
               onSubmit:()=>{},
               validationSchema: schema,
        })

    return(
        <main className="min-h-screen flex justify-center px-2 md:px-6 md:py-10 lg:px-16 lg:py-12">
            <div className="w-full md:w-[350px] max-h-[400px] md:rounded-md md:shadow-lg lg:px-2 lg:py-4">
                <h1 className="text-3xl text-gray-700px"> Loan Details</h1>
                <div className="my-4 px-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl text-gray-700">Loan Amount</p>
                        <p className="text-2xl text-gray-400">₦ {loan?.amount}</p>
                    </div>
                     <div className="flex justify-between items-center">
                        <p className="text-2xl text-gray-700">Loan Duration</p>
                        <p className="text-2xl text-gray-400">{loan?.duration} Days</p>
                    </div>
                     <div className="flex justify-between items-center">
                        <p className="text-2xl text-gray-700">Intrest Rate</p>
                        <p className="text-2xl text-gray-400">{loan?.rate} %</p>
                    </div>
                     <div className="flex justify-between items-center">
                        <p className="text-2xl text-gray-700">Repayment Amount </p>
                        <p className="text-2xl text-gray-400">₦ {loan?.repayment.toLocaleString()}</p>
                    </div>
                    {!showInput &&(
                    <button onClick={()=>setShowInput(true)} className="w-full h-8 bg-indigo-400 text-white
                     roundd-m shadow-md cursor-pointer hover:opacity-60">Repay Loan
                     </button>
                     )}
                     {showInput && (
                     <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <div>
                        <TextField
                        fullWidth
                        size="small"
                        placeholder="Enter Repayment Amount"
                        label="Repayment Amount"
                        id="repaymentAmount"
                        />
                        {touched.repaymentAmount && errors.repaymentAmount ? <span className="text-sm
                         text-red-500">{ errors.repaymentAmount}</span> : null }
                        </div>
                        <button className="w-full h-8 text-white bg-green-400 rounded-md">repay</button>
                     </form>
                     )}
                </div>

            </div>

        </main>
    )
}