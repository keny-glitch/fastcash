         "use client"
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    fullname: yup.string().required("fullname is required").min(5),
    bvn: yup.number().required("Bvn is required").min(12),
    nin: yup.number().required("Nin is required").min(11),
    dob: yup.date().required("Date of birth is required"),
    phone: yup.number().required("phone number is required").min(11),
    gender: yup.string().oneOf(["male","female"]).required("Gender is required"),
    bvn: yup.string().required("address is required").min(10),

})

export default function UpdateProfile () {

    const{handleSubmit,handleChange,touched,errors,values} = useFormik({
        initialValues:{
            fullname:"",
            bvn:"",
            nin:"",
            dob:"",
            phone:"",
            gender:"",
            address:"",

        },
        onSubmit:()=>{
            alert("profile update")
            alert(`welcome ${values.fullname}`);
        },
        validationSchema: schema,
    })
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-12 lg:py-8 lg:px-16">
            <div className="w-full md:w-[500px] h-[450px] rounded-md  shadow-md px-4 py-6">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Update Your Profile</h1>
                <form onSubmit={handleSubmit}
                className="flex flex-col gap-3">
                    <div>
                        <TextField
                        fullWidth
                        type="text"
                        label="FullName"
                        id="fullname"
                        placeholder="Enter Your fullName"
                        size="small"
                        values={values.fullname}
                        onChange={handleChange}
                        />
                        {touched.fullname&&errors.fullname ? <span className="text-xs text-red-500">
                        {errors.fullname}</span> : null}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                        <TextField
                        fullWidth
                        type="number"
                        label="BVN"
                        id="bvn"
                        placeholder="Enter BVN"
                        size="small"
                        values={values.bvn}
                        onChange={handleChange}
                        />
                        {touched.bvn&&errors.bvn ? <span className="text-xs text-red-500">
                        {errors.bvn}</span> : null}
                        </div>
                        <div>
                        <TextField
                          fullWidth
                          type="number"
                          label="NIN"
                          id="nin"
                          placeholder="Enter nin"
                          size="small"
                          values={values.nin}
                        onChange={handleChange}
                        />
                        {touched.nin&&errors.nin ? <span className="text-xs text-red-500">
                        {errors.nin}</span> : null}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                        <TextField
                        fullWidth
                        InputLabelProps={{shrink:true}}
                        type="date"
                        label="DOB"
                        id="dob"
                        placeholder="Enter date of birth"
                        size="small"
                        values={values.dob}
                        onChange={handleChange}
                        />
                        {touched.dob&&errors.dob ? <span className="text-xs text-red-500">
                        {errors.dob}</span> : null}
                        </div>
                        <div>
                        <TextField
                         fullWidth
                         type="tel"
                         label="Phone Number"
                         id="phone"
                         placeholder="Enter your phone number"
                         size="small"
                         values={values.phone}
                        onChange={handleChange}
                        />
                        {touched.phone&&errors.phone ? <span className="text-xs text-red-500">
                        {errors.phone}</span> : null}
                        </div>
                    </div>
                    <FormControl>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select 
                          labelId="gender-label"
                          id="gender"
                          name="gender"
                          label="Gender"
                          size="small"
                          values={values.gender}
                           onChange={handleChange}
                         >
                             <MenuItem value="male">Male</MenuItem>
                             <MenuItem value="female">Female</MenuItem>
                        </Select>
                        {touched.gender && errors.gender ? <span className="text-xs text-red-500">
                        {errors.gender}</span> : null}
                    </FormControl>
                    <div>
                        <TextField
                         fullWidth
                         multiline
                         rows={3}
                         type="text"
                         label="Address"
                         id="address"
                         placeholder="Enter Address"
                         size="small"
                           values={values.address}
                           onChange={handleChange}
                        />
                        {touched.address&&errors.address ? <span className="text-xs text-red-500">
                        {errors.address}</span> : null}
                    </div>
                    <button className="w-full h-10 rounded-md bg-indigo-500
                     text-white cursor-pointer">Update</button>
                   

                </form>

            </div>

        </main>
    )
}