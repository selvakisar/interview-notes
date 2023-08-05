import * as yup from "yup";

export const studentSchema = yup.object({
    name : yup.string().required("Please fill in the Name"),
    batch : yup.string().required("Please fill the batch")
    .min(5, "Invalid batch Details"),
    phone : yup.string(),
    email:  yup.string().email().required("Please fill a valid mail"),
    qualification : yup.string().required("Please specify your qualification")
    .min(2, "Please add valid qualification")
    .max(10, "Don't playaround right valid details")
});