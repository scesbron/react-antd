import {Button, Form, Input} from "antd";
import {FormProvider, SubmitHandler, useForm, useWatch} from "react-hook-form";
import {FormItem} from "react-hook-form-antd";

type FormValues = {
  name: string
  description?: string
}

function InsideForm() {
  const name = useWatch<FormValues>({ name: 'name'})
  const description = useWatch<FormValues>({ name: 'description'})

  console.log('inside watch name', name)
  console.log('inside watch description', description)
  return null
}

export default function AntdHookForm() {
  const methods = useForm<FormValues>({ defaultValues: {
      name: 'test'
    }})
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  const name = methods.watch("name")
  const description = methods.watch("description")

  console.log("name", name)
  console.log("description", description)

  return (
    <FormProvider {...methods}>
    <Form onFinish={methods.handleSubmit(onSubmit)}>
      <InsideForm />
      <FormItem control={methods.control} name="name"><Input /></FormItem>
      <Form.Item name="description"><Input /></Form.Item>
      <Button htmlType="submit" type="primary">Submit</Button>
    </Form></FormProvider>
  )
}
