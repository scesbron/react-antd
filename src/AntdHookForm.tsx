import {Button, Form, Input} from "antd";
import {FormProvider, SubmitHandler, useForm, useFormContext, useWatch} from "react-hook-form";
import {FormItem} from "react-hook-form-antd";

type FormValues = {
  name: string
  description?: string
}

function InsideFormWatch() {
  const name = useWatch<FormValues>({ name: 'name'})
  const description = useWatch<FormValues>({ name: 'description'})

  console.log('inside watch name', name)
  console.log('inside watch description', description)
  return null
}

function InsideFormValue() {
  const { getValues } = useFormContext<FormValues>()
  const nameValue = getValues('name')
  const descriptionValue = getValues('description')

  console.log('inside name value', nameValue)
  console.log('inside description value', descriptionValue)
  return null
}

export default function AntdHookForm() {
  const methods = useForm<FormValues>({ defaultValues: {
      name: 'test'
    }})
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
    <Form onFinish={methods.handleSubmit(onSubmit)}>
      <InsideFormWatch />
      <InsideFormValue />
      <FormItem control={methods.control} name="name"><Input /></FormItem>
      <Form.Item name="description"><Input /></Form.Item>
      <Button htmlType="submit" type="primary">Submit</Button>
    </Form></FormProvider>
  )
}
