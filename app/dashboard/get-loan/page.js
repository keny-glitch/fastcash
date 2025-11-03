  "use client"
import { listItemSecondaryActionClasses, TextField } from "@mui/material";
import { useState } from "react";

const duration = [
    {id:"30",days:30},
    {id:"60",days:60},
    {id:"90",days:90}
]

export default function GetLoan (){
    const [clickedRate, setClickedRate]= useState(undefined);
    const [rate,setRate]= useState(0)
    const[loanDuration,setLoanDuration]= useState(0)
    return(
        <main className="min-h-screen bg-gray-50 flex justify-center py-4 md:py-6 lg:px-16 ">
            <div className="w-full md:w-[350px] h-[550px] rounded-md shadow-md flex 
                            flex-col gap-4 p-2 border border-gray-200">

              <h1 className="text-center text-lg font-semibold text-indigo-500">Get Instant Loan from fastcash</h1>

              <form className="flex flex-col gap-4">
                <div className="w-full mb-2">
                    <TextField
                    type="number"
                    label="Amount"
                    placeholder="Enter Loan Amount"
                    id="amount"
                    size="small"
                    className="w-full"
                    />
                </div>

                <div className="border-dashed border border-indigo-600 p-4 rounded-md">
                    <p>Choose your Loan Duration</p>
                    <ul className="grid grid-cols-3 gap-2">
                        {duration.map(item=>
                        <li key={item.id} 
                        onClick={()=>{
                            setClickedRate(item.id)
                            if(item.days === 30){
                                setRate(10)
                            }
                            else if(item.days === 60){
                                setRate(20)
                            }
                            else if(item.days === 90){
                                setRate(30)
                            }

                            if(item.days === 30){
                                setLoanDuration(30)
                            }
                            else if(item.days === 60){
                                setLoanDuration(60)
                            }
                            else if(item.days === 90){
                                setLoanDuration(90);
                            }
                        }}
                         
                        
                        className="h-16 bg-indigo-500 text-white text-md rounded-md
                         justify-center flex items-center cursor-pointer">{item.days} Days</li>
                         )}
                    </ul>
                </div>

                <div className="border-dashed border border-indingo-600 p-4 rounded-md">
                    <p className="text-indigo-800">Intrest rate for {loanDuration}</p>
                    <p className="text-4xl text-indigo-800">{rate}%</p>
                </div>

                <div className="flex flex-col gap-3 bg-linear-to-b from bg-indigo-400
                 to-indigo-900 border-dshed border-indigo600 p-4 rounded">
                    <p className="text-indigo-200">Repayment Amount</p>
                    <p className="text-white text-4xl">500,000</p>
                </div>

                <div>
                    <button type="submit" className="p-2 rounded-md bg-indigo-800 text-white uppercse">GET LOAN</button>
                </div>

              </form>


            </div>
          
        </main>
    )
}