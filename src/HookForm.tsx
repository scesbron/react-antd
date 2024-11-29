import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  example: string
  exampleRequired: string
  description?: number
}

export default function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: {
    example: 'test'
    }})
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const example = watch("example")
  const exampleRequired = watch("exampleRequired")
  const description = watch("description")

  console.log("example", example)
  console.log("exampleRequired", exampleRequired)
  console.log("description", description)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", {required: true})} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input {...register("description")} type="number" />

      <input type="submit"/>
    </form>
  )
}
