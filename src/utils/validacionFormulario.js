import { object, string } from "yup"

let userSchema = object({
  nombre: string().required("ingresa tu nombre, es un campo obligatorio"),
  telefono: string().required("ingresa tu telefono, es un campo obligatorio"),
  email: string().email("ingresa tu email con el formato correcto").required("El Email es obligatorio")
})

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm