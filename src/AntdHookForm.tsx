import {Button, Form, Input} from "antd";
import {SubmitHandler, useForm} from "react-hook-form";
import {FormItem} from "react-hook-form-antd";

type FormValues = {
  name: string
  description?: string
}

export default function AntdHookForm() {
  const {
    control,
    handleSubmit,
    watch,
  } = useForm<FormValues>({ defaultValues: {
      name: 'test'
    }})
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  const name = watch("name")
  const description = watch("description")

  console.log("name", name)
  console.log("description", description)

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <FormItem control={control} name="name"><Input /></FormItem>
      <Form.Item name="description"><Input /></Form.Item>
      <Button htmlType="submit" type="primary">Submit</Button>
    </Form>
  )
}
