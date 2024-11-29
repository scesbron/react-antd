import {Button, Form, Input} from "antd";

type FormValues = {
  name: string
  description?: string
}

function InsideForm() {
  const form = Form.useFormInstance<FormValues>()
  const watchedName = Form.useWatch('name')
  const name = form.getFieldValue('name')
  console.log('the name is ', name)
  console.log('the watched name inside form is ', watchedName)

  return <div>The name is : {name}</div>
}

function App() {
  const [form] = Form.useForm<FormValues>()
  const watchedName = Form.useWatch('name')

  const submit = (values: FormValues) => {
    console.log('submit', values)
  }
  console.log('the watched name outside form is ', watchedName)
  return (
    <Form form={form} onFinish={submit} initialValues={{ name: ''}}>
      <InsideForm />
      <Form.Item name="name"><Input /></Form.Item>
      <Form.Item name="description"><Input /></Form.Item>
      <Button htmlType="submit" type="primary">Submit</Button>
    </Form>
  )
}

export default App
